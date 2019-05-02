//container for displaying Profile info
//          and all posts for that user
//calls PostsContainer: to get the posts from db
//                      and call each Post
//calls Cities for the sidebar

import React, {Component} from 'react';
import Profile from './components/Profile';
import Cities from './components/Cities';
import PostsContainer from './containers/PostsContainer';

class ProfileContainer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Cities />
          </div>
          <div className="col-md-8">
            <Profile />
            <PostsContainer postType="user"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileContainer;
