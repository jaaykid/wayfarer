// TODO: add db call
// TODO: call indiv Post components

import React, {Component} from 'react';
import CityModel from '../models/City';
import ProfileModel from '../models/Profile';
import Post from '../components/Post';

class PostsContainer extends Component {
  state = {
    posts: [],
    postType: this.props.postType
  }

  getId = () => {
    return window.location.pathname.replace(/^\/.+\/(.+)$/, '$1');
  }

  componentDidMount() {
    const model = (this.state.postType === 'profile')? ProfileModel: CityModel;
    model.getPosts(this.getId())
      .then((res) => {
        let posts = res.data.map(post => {
          return <Post post={post} key={post._id} />
        })
        this.setState({posts});
      })
  }

  render() {
    return (
      <section className="PostList">
        {this.state.posts}
      </section>
    )
  }
}

export default PostsContainer;
