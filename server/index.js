const path = require('path')
require('dotenv').config({path : path.join(__dirname, '.env')});
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cors = require('cors');

const app = express();

const productsController = require('./controller');

massive(process.env.DB_CONNECTION_STRING, { scripts: path.join(__dirname, 'db')})
    .then(dbInstance => {
        app.set('db', dbInstance);
        console.log('db', dbInstance)
    }).catch (e => {
        console.error(e);
    })

app.use(cors());
app.use(bodyParser.json());

app.get('/api/inventory', productsController.getAll );
app.post('/api/inventory', productsController.create );



app.listen(3003, () => {
    console.log('Server is running on port 3003.')
})

