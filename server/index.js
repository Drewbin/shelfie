const path = require('path')
require('dotenv').config({path : path.join(__dirname, '.env')});
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');

const app = express();
let dbPromise;
const productsController = require('./controller');


function useDb() {
    return function useDbMiddleware(req, res, next) {
        if (!dbPromise) {
            dbPromise = getDb();
        }

        dbPromise
            .then(dbInstance => {
                req.db = dbInstance;

                next();
            })
            .catch(e => {
                console.error(e);
                res.status(500).send({ message: 'Something really bad happened' });
                dbPromise = null;
            });
    };
}

function getDb() {
    return massive(process.env.DB_CONNECTION_STRING, { scripts: path.join(__dirname, 'db')});
}

app.use(cors());
app.use(bodyParser.json());
app.use(useDb());

app.get('/api/inventory', productsController.getAll );
app.get('/api/edit/:id', productsController.getOne);
app.post('/api/product', productsController.create );
app.delete('/api/product/:id', productsController.delete);


app.listen(3003, () => {
    console.log('Server is running on port 3003.')
})

