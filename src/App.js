import React, { Component } from 'react';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor() {
    super()
    
    this.state={
      inventoryList: [],
    }
  }

  componentWillMount() {
    axios.get('http://localhost:8000/api/inventory').then(res => {
      this.setState({
        inventoryList : res.data,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form list={this.state.inventoryList} />
        <Dashboard list={this.state.inventoryList} />
      </div>
    );
  }
}

export default App;
