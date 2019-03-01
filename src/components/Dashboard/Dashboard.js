import React, {Component} from 'react';

import Product from '../Product/Product'


export default class Dashboard extends Component {


    render() {
       // const prodList = this.props.list.map((product, index) => (
         //   <Product product={product} key={index} />))
        

        const prodList = this.props.list.map((product, index) => {
            return(
                <div key={index}>
                    <p></p>
                    {product.name}
                    <p></p>
                    {product.image}
                    <p></p>
                    {product.price}
                </div>
            )
        })
        return prodList;
    }
}