import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Users from "./Users";
import Create from "./Create";
import PageNotFound from "./PageNotFound";
import View from "./View";


class App extends Component {
  render() {
    return <div>
        <Navigation />
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/users" render={() => {
                return <Users />
            }} />
            <Route path="/create" render={() => {
                return <Create />
            }} />
            <Route path="/view/:id" component={View}/>
            <Route component={PageNotFound}/>
        </Switch>
    </div>
  }
}

export default App;
