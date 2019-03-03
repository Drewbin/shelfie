import React, { Component } from 'react';
import './App.css';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';

import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
//import axios from 'axios';

class App extends Component {




  render() {
    return (
      
      <Router>
        <div className="App">
        <Header />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path='/add' component={Form} />
            <Route path='/edit/:id' component={Form} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
