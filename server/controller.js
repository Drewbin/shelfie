module.exports = {

    getAll: (req, res) => {
        const dbInstance = req.db;

        dbInstance.get_inventory().then( (inventory) => {
            res.status(200).send(inventory)
        }).catch(err => {
            res.status(500).send('Failed to list inventory.')
            console.error(err);
        })
    },

    create: (req, res) => {
        const dbInstance = req.db;
        const { name, image, price } = req.body
        
        dbInstance.create_product([ name, image, price ]).then( () => {
            console.log('created')
            res.status(200).send('Product added.')
        }).catch(err => {
            res.status(500).send('Failed to create item.')
            console.error(err);
        })
    },

    edit: (req, res) => {
        const dbInstance = req.db;
        const { name, image, price } = req.body;

        dbInstance.edit_product([ name, image, price ]).then( () => {
            console.log('edited')
            res.status(200).send('Product edited')
        }).catch(err => {
            res.status(200).send('Failed to edit item.')
            console.error(err);
        })
    }

    getOne: (req, res) => {
        const dbInstance = req.db;
        const { params } = req;

        dbInstance.read_product(params.id).then( (product) => {
            res.status(200).send(product[0])
        }).catch(err => {
            res.status(500).send('Failed to find product.');
            console.error(err)
        })
    },

    delete: (req, res) => {
        const dbInstance = req.db;
        const { params } = req;

        dbInstance.delete_product(params.id).then( () => {
            res.status(200).send('Deleted product')
        }).catch(err => {
            res.status(500).send('Failed to delete product.')
            console.error(err)
        })
    },



}