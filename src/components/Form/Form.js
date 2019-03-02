import React, {Component} from 'react';
import axios from 'axios';

export default class Form extends Component {
    state = {
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
        
        const { name, image, price } = this.state;

        axios.post('http://localhost:8000/api/inventory', {
            name,
            image,
            price,
        }).then( () => {
            this.props.history.push('/product')
        })
        this.state.clearInput();
    }

    render() {
        return (
            <div>

                <input 
                    type='text'
                    value={this.state.image} 
                    placeholder='Image URL'
                    onChange={this.handleNameChange} />

                <input 
                    type='text'
                    value={this.state.name}
                    placeholder='Product Name'
                    onChange={this.handleImageChange}  />

                <input 
                    type='number'
                    value={this.state.price}
                    placeholder='Price'
                    onChange={this.handlePriceChange} />

                <button onClick={this.addItem} > Add to Inventory </button>

                <button onClick={this.clearInput}> Cancel </button>

                
            </div>
        )
    }
}