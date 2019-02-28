import React, { Component } from 'react';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends Component {
  constructor() {
    super()
    
    this.state={
      inventoryList: [
        {name: 'prod1', price: 10, image : 'http://http.cat/100'},
        {name: 'prod2', price: 20, image : 'http://http.cat/200'},
      ],
    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard list={this.state.inventoryList} />
        <Form />
      </div>
    );
  }
}

export default App;
