//container for displaying all posts for a city
//calling PostsContainer: to get the posts from db
//                      and call each Post

import React, {Component} from 'react';
import City from './components/City';
import Cities from './components/Cities';
import PostsContainer from './containers/PostsContainer';

class CityPosts extends Component {
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <Cities />
            </div>
            <div className="col-md-8">
              <City />
              <PostsContainer postType="city"/>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CityPosts;
