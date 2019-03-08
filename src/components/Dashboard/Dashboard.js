import React, {Component} from 'react';
import axios from 'axios';
import Product from '../Product/Product';


export default class Dashboard extends Component {
    constructor() {
        super()
        
        this.state={
          inventoryList: [],
        }

      this.deleteProduct = this.deleteProduct.bind(this);
      this.editProduct = this.editProduct.bind(this);
      
    }
    

    showInventory() {
        axios.get('/api/inventory').then(res => {
          this.setState({
            inventoryList : res.data,
          });
        });
    }

    deleteProduct(id){
        axios.delete( `/api/product/${id}` ).then(res => {
          this.showInventory();
          });
    }

    componentDidMount(){
      this.showInventory();
    }

    editProduct(id) {
      console.log(id)
      this.props.history.push(`/api/edit/${id}`)
    }

    render() {
        const prodList = this.state.inventoryList.map((product, index) => (
           <Product product={product} key={index} deleteProduct={this.deleteProduct} editProduct={this.editProduct} />))
        
            return(

              prodList

            )
    }
}
