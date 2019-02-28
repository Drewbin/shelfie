import React, {Component} from 'react';

export default class Form extends Component {
    state = {
        input1 : '',
        input2 : '',
        input3 : '',
    }

    handleInputChange1 = (event) => {
        this.setState({ input1 : event.target.value });
    };
    
    handleInputChange2(event) {
        this.setState({ input2 : event.target.value });
    }

    handleInputChange3(event) {
        this.setState({ input3 : event.target.value });
    }

    clearInput = () => {
        this.setState({
            input1 : '',
            input2 : '',
            input3 : '',
        })
    };

    render() {
        return (
            <div>

                <input 
                    type='text'
                    value={this.state.input1} 
                    placeholder='First'
                    onChange={this.handleInputChange1} />

                    {/* 
                    
                    <input type="text" placeholder="First" />

                    var input = document.querySelector('input');

                    var changeHandler = this.props.onChange;

                    input.addEventListener('keyup', changeHandler, false);
                    
                    */}
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

                <button onClick={this.clearInput}> Cancel </button>

                
            </div>
        )
    }
}