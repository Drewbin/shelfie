import React, { Component } from 'react';


export default class Product extends Component {
    render() {
        const { /*id,*/ name, image, price } = this.props.product;

        return (
            <form>
                <h3>
                    {name}
                </h3>
                <img src={image} alt={name}/>
                <p>Price: {'$' + price} </p>
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