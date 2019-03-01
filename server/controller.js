module.exports = {
    getAll: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_inventory().then( (products) => {
            res.status(200).send(products)
        }).catch(err => {
            res.status(500).send('Failed to list products.')
            console.error(err);
        })
    },
}