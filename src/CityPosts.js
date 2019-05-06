//container for displaying all posts for a city
//calling PostsContainer: to get the posts from db
//                      and call each Post

import React, {Component} from 'react';
import CityHead from './components/CityHead';
import Cities from './components/Cities';
import PostsContainer from './containers/PostsContainer';
import ModalPost from './components/ModalPost';

class CityPosts extends Component {

  submitPost = (e) => {
    e.preventDefault();
    console.log('submitting post info');
    document.getElementById('postModal').classList.remove('display');
    document.getElementById('newPostSub').removeEventListener('submit', this.submitPost);
    document.getElementById('cancelPost').removeEventListener('click', this.closePostModal);
  }
  closePostModal = () => {
    console.log('closing post modal');
    document.getElementById('postModal').classList.remove('display');
    document.getElementById('cancelPost').removeEventListener('click', this.closePostModal);
    document.getElementById('newPostSub').removeEventListener('submit', this.submitPost);
  }
  openPostModal = () => {
    document.getElementById('postModal').classList.add('display');
    document.getElementById('cancelPost').addEventListener('click', this.closePostModal);
    document.getElementById('newPostSub').addEventListener('submit', this.submitPost);
  }

  componentDidMount() {
    document.getElementById('addPost').addEventListener('click', this.openPostModal);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Cities />
          <div className="col-md-8">
            <CityHead />
            <div className="postHead row">
              <div className="col-1"> </div>
              <h2 className="col-9">Posts</h2>
              <div className="col-1">
                <img src="/images/addPost.png" alt="Add a post" id="addPost"/>
              </div>
              <div className="col-1"> </div>
            </div>
            <PostsContainer postType="city"/>
          </div>
        </div>
        <ModalPost />
      </div>
    )
  }
}

export default CityPosts;
