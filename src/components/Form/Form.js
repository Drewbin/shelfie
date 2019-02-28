import React, {Component} from 'react';

export default class Form extends Component {
    constructor() {
        super()

        this.state = {
            input1 : '',
            input2 : '',
            input3 : '',
        }

        this.handleInputChange1 = this.handleInputChange1.bind(this);
        this.handleInputChange2 = this.handleInputChange2.bind(this);
        this.handleInputChange3 = this.handleInputChange3.bind(this);
        this.reset = this.reset.bind(this);

    }
    handleInputChange1(event) {
        this.setState({ input1: event.target.value });
    }
    
    handleInputChange2(event) {
        this.setState({input2 : event.target.value });
    }

    handleInputChange3(event) {
        this.setState({input3 : event.target.value });
    }

    reset() {
        this.setState({
            input1 : '',
            input2 : '',
            input3 : '',
        })
    }

    render() {
        return (
            <div>

                <input 
                    type='text'
                    value={this.state.input1} 
                    placeholder='First'
                    onChange={(event) => this.handleInputChange1(event)} />
                <input 
                    type='text'
                    value={this.state.input2}
                    placeholder='Second'
                    onChange={(event) => this.handleInputChange2(event)}  />
                <input 
                    type='text'
                    value={this.state.input3}
                    placeholder='Third' 
                    onChange={(event) => this.handleInputChange3(event)} />

                <button> Add to Inventory </button>

                <button onClick={() => this.reset()}> Cancel </button>

                
            </div>
        )
    }
}