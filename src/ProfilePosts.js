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

  submitBioEdit = (e) => {
    e.preventDefault();
    console.log('submitting post info');
    document.querySelector('.editBioBlock').classList.add('hide');
    document.querySelector('.bioDisplay').classList.remove('hide');
    document.getElementById('cancelEdit').removeEventListener('click', this.closeEditBio);
    document.querySelector('.editBioBlock').removeEventListener('submit', this.submitBioEdit);
  }
  closeEditBio = () => {
    console.log('closing post modal');
    document.querySelector('.editBioBlock').classList.add('hide');
    document.querySelector('.bioDisplay').classList.remove('hide');
    document.getElementById('cancelEdit').removeEventListener('click', this.closeEditBio);
    document.querySelector('.editBioBlock').removeEventListener('submit', this.submitBioEdit);
  }
  openEditBio = () => {
    document.querySelector('.editBioBlock').classList.remove('hide');
    document.querySelector('.bioDisplay').classList.add('hide');
    document.getElementById('cancelEdit').addEventListener('click', this.closeEditBio);
    document.querySelector('.editBioBlock').addEventListener('submit', this.submitBioEdit);
  }

  componentDidMount() {
    document.querySelector('.editButton').addEventListener('click', this.openEditBio);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <Cities />
          </div>
          <div className="col-md-8">
            <Profile />
            <div className="postHead row">
              <div className="col-1"> </div>
              <h2 className="col-9">Your Posts</h2>
              <div className="col-1">
              </div>
              <div className="col-1"> </div>
            </div>
          <PostsContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default ProfileContainer;
