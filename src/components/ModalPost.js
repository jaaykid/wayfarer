import React, {Component} from 'react';

class ModalPost extends Component {
  render() {
    return (
      <div className="modal" id="postModal">
        <div className="modalBox" id="postModalBox">
          <h3>Create a new post for: CITY NAME</h3>
          <form id="newPostSub" novalidate>
            <div className="form-group">
              <label for="postTitle">Title</label><br />
              <input type="text" className="form-control" id="postTitle" name="title" placeholder="Enter your post title"/>
            </div>
            <textarea className="form-control" rows="6" name="postBody"></textarea>
            <input type="submit" className="btn btn-primary float-right" id="postBtn" value="Post It" />
            <input type="button" className="btn btn-warning float-right" id="cancelPost" value="Cancel" />
          </form>
        </div>
      </div>
    )
  }
}

export default ModalPost;
