import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home';
import ProfilePosts from '../ProfilePosts';
import CityPosts from '../CityPosts'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={ProfilePosts} />
    <Route path="/city" component={CityPosts} />
  </Switch>
)
