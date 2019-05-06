// TODO: presentation component to display city header

import React, {Component} from 'react';


class CityHead extends Component {

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
      <div className="card no-gutters">
        <div className="row">
          <div className="col-4">
            <h2>San Francisco Posts</h2>
          </div>
          <div className="col-8">
            <img src="/images/cities/SF.jpg" alt="San Francisco skyline" />
          </div>
        </div>
      </div>
    )
  }
}
export default CityHead;
