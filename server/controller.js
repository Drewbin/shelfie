module.exports = {

    getAll: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory().then( (inventory) => {
            res.status(200).send(inventory)
        }).catch(err => {
            res.status(500).send('Failed to list inventory.')
            console.error(err);
        })
    },

    create: (req, res) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.create_product([ name, image, price ]).then( () => {
            res.sendStatus(200).send('Product create')
        }).catch(err => {
            res.status(500).send('Failed to create item.')
            console.error(err);
        })
    },


}