import React from 'react';
import {Switch, Route} from 'react-router-dom';
// TODO: connect this when Home exists
//import Home from '../components/Home';
import ProfilePosts from '../ProfilePosts';
import CityPosts from '../CityPosts'

export default (
  <Switch>
    {/* <Route exact path="/" component={Home} /> */}
    <Route path="/profile" component={ProfilePosts} />
    <Route path="/city" component={CityPosts} />
  </Switch>
)
