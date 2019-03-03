import React, { Component } from 'react';


export default class Product extends Component {
    render() {
        const { name, image, price } = this.props.product;
        const deleteProduct = this.props.deleteProduct;

        return (
            <form>
                <h3>
                    {name}
                </h3>
                <img src={image} alt={name}/>
                <p>Price: {'$' + price} </p>
                <button onClick={this.props.deleteProduct}>Delete</button>
                <button>Edit</button>
            </form>
        )
    }
}





// export default function product() {
//     const {id, name, image, price } = this.props.product
//     return( 
//         <div>
//             <h1>
//                 {this.props.product.name}
//             </h1>
//         </div>
//     )
// }