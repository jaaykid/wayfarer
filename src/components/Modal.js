import React, {Component} from 'react';
//import './Modal.css';

class Modal extends Component {
  render() {
    return (
      <div className="modal" id="loginModal">
        <div className="modalBox" id="loginModalBox">
          <h3>log in</h3>
          <form id="newLoginSub" novalidate>
            <div className="form-group">
              <input type="text" className="form-control" id="postTitle" name="title" placeholder="username"/>
            </div>
            <input type="text" className="form-control" id="password" name="title" placeholder="password"/>
            <input type="submit" className="btn btn-primary float-right" id="loginBtn" value="let's get travelin'" />
            <input type="button" className="btn btn-primary float-right" id="signUpBtn" value="join us" />
            <input type="button" className="btn btn-warning float-right" id="cancelModal" value="cancel" />
          </form>
        </div>
      </div>
    )
  }
}

export default Modal;
