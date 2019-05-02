//container for displaying all posts for a city
//calling PostsContainer: to get the posts from db
//                      and call each Post

import React, {Component} from 'react';
import City from '../components/City';
import Cities from '../components/Cities';
import PostsContainer from './PostsContainer';

class CityPosts extends Component {
  render() {
    return (
      <>
        <Cities />
        <City />
        <PostsContainer postType="city"/>
      </>
    )
  }
}

export default CityPosts;
