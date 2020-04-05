
import React, {Component} from 'react'
import {BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import './App.css';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
