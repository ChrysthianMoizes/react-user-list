import React from "react";
import { Router, Route, hashHistory } from 'react-router';
import Home from './pages/Home';
import Users from './pages/Users';

const Routes = () => (
  <Router history={hashHistory}>
    <Route exact path="/" component={Home}>
      <Route path="/users" component={Users} />
    </Route>

  </Router>
);

export default Routes;
