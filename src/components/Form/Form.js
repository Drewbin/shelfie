import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component {
    state = {
        id : '',
        name : '', 
        image : '', 
        price : 0,
    }


    handleNameChange = (event) => {
        this.setState({ image : event.target.value });
    };
    
    handleImageChange = (event) => {
        this.setState({ name : event.target.value });
    }

    handlePriceChange = (event) => {
        this.setState({ price : event.target.value });
    }

    clearInput = () => {
        this.setState({
            name : '',
            image : '',
            price : 0,
        })
    };

    addItem = (event) => {
        event.preventDefault();
        
        const { id, name, image, price } = this.state;

        axios.post('/api/product', {
            id,
            name,
            image,
            price,
        }).then( () => {
            this.props.history.push('/')
            this.clearInput();

        })
    };

    loadProduct = (id) => {
        axios.get( `/api/edit/${id}` ).then(res => {
            console.log(res)
          this.setState({
              id: res.data.id,
              name: res.data.name,
              image: res.data.image, 
              price: res.data.price
          })
      })
    }

    componentDidMount() { 
        if(this.props.match.params.id) {
        this.loadProduct(this.props.match.params.id);}
        }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type='text'
                        value={this.state.name}
                        placeholder='Product Name'
                        onChange={this.handleImageChange}  />


                    <input 
                        type='text'
                        value={this.state.image} 
                        placeholder='Image URL'
                        onChange={this.handleNameChange} />


                    <input 
                        type='number'
                        value={this.state.price}
                        placeholder='Price'
                        onChange={this.handlePriceChange} />

                    <button 
                        onClick={(event) => this.addItem(event)}
                        type='submit' >Add to Inventory </button>
                    
                    <button 
                        onClick={() => this.clearInput}
                        type='button' > Cancel </button>

                </form>
            </div>  
        )
    }
}