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
            res.status(200).send('Product added.')
        }).catch(err => {
            res.status(500).send('Failed to create item.')
            console.error(err);
        })
    },

    getOne: (req, res) => {
        const dbInstance = req.db;
        const { params } = req;

        dbInstance.read_product(params.id).then ( (product) => {
            res.status(200).send(product)
        }).catch(err => {
            res.status(500).send('Faled to find product.');
            console.error(err)
        })
    }


}