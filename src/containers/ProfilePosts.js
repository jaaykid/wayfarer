//container for displaying Profile info
//          and all posts for that user
//calls PostsContainer: to get the posts from db
//                      and call each Post
//calls Cities for the sidebar

import React, {Component} from 'react';
import Profile from '../components/Profile';
import Cities from '../components/Cities';
import PostsContainer from './PostsContainer';

class ProfileContainer extends Component {
  render() {
    return (
      <>
        <Cities />
        <Profile />
        <PostsContainer postType="user"/>
      </>
    )
  }
}

export default ProfileContainer;
