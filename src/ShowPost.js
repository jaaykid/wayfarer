import React, {Component} from 'react';
import PostModel from './models/Post';
import Post from './components/Post';

class ShowPost extends Component {
  state = {post: ''}

  getPostId = () => {
    return window.location.pathname.replace(/^\/post\/(.+)$/, '$1');
  }

  componentDidMount() {
    PostModel.getOne()
      .then((res) => {
        this.setState({post: res.data});
      })
  }

  render() {
    return (
      <>
        <Post post={this.state.post} />
      </>
    )
  }
}

export default ShowPost;
