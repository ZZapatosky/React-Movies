import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { Title } from './pages/Title'
import { Home } from './pages/Home'

import './App.css';
import 'bulma/css/bulma.css'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/title/:id' component={Title}/>
        </Switch>
      </div>
      );
  }
}

export default App;
