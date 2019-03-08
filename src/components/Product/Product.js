import React, { Component } from 'react';


export default class Product extends Component {
    render() {
        const { name, image, price } = this.props.product;
        const deleteProduct = this.props.deleteProduct;
        const editProduct = this.props.editProduct;

        return (
            <form>
                <h3>
                    {name}
                </h3>
                <img src={image} alt={name}/>
                <p>Price: {'$' + price} </p>
                <button onClick={() => deleteProduct(this.props.product.id)}>Delete</button>
                <button onClick={() => editProduct(this.props.product.id)}>Edit</button>
            </form>
        )
    }
}
