// TODO: add db call
// TODO: call indiv Post components

import React, {Component} from 'react';
import Post from '../components/Post';

class PostsContainer extends Component {
  render() {
    return (
      <Post postType={this.props.postType}/>
    )
  }
}

export default PostsContainer;
