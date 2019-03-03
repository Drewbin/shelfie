import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';


export default class Dashboard extends Component {
    constructor() {
        super()
        
        this.state={
          inventoryList: [],
        }
      }

    componentDidMount() {
        axios.get('/api/inventory').then(res => {
          this.setState({
            inventoryList : res.data,
          });
        });
     }

    render() {
        const prodList = this.state.inventoryList.map((product, index) => (
           <Product product={product} key={index} />))
        
            return(

                prodList

            )
    }
}


// <div key={index}>
    // <p></p>
    // {product.name}
    // <p></p>
    // {product.image}
    // <p></p>
    // {product.price}
//</div>