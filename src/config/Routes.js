import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../Home';
import GenPostPage from '../GenPostPage';
import ShowPost from '../ShowPost';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={GenPostPage} />
    <Route path="/city" component={GenPostPage} />
    <Route path="/post" component={ShowPost} />
  </Switch>
)
