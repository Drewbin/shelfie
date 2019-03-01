import React, {Component} from 'react';

export default class Form extends Component {
    state = {
        image : '',
        name : '',
        price : 0,
    }

    handleImageChange = (event) => {
        this.setState({ image : event.target.value });
    };
    
    handleNameChange = (event) => {
        this.setState({ name : event.target.value });
    }

    handlePriceChange = (event) => {
        this.setState({ price : event.target.value });
    }

    clearInput = () => {
        this.setState({
            image : '',
            name : '',
            price : 0,
        })
    };

    render() {
        return (
            <div>

                <input 
                    type='text'
                    value={this.state.image} 
                    placeholder='Image URL'
                    onChange={this.handleImageChange} />

                <input 
                    type='text'
                    value={this.state.name}
                    placeholder='Product Name'
                    onChange={this.handleNameChange}  />

                <input 
                    type='number'
                    value={this.state.price}
                    placeholder='Price'
                    onChange={this.handlePriceChange} />

                <button> Add to Inventory </button>

                <button onClick={this.clearInput}> Cancel </button>

                
            </div>
        )
    }
}