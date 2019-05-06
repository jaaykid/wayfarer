import React, {Component} from 'react';

class Modal extends Component {
  render() {
    return (
      <div className="modal" id="loginModal">
        <div className="modalBox" id="loginModalBox">
      <div className="form-group">
          <h3>log in</h3>
      </div>
          <form id="newLoginSub" noValidate>
          <div className="form-group">
            <input type="text" className="form-control" id="loginTitle" name="title" placeholder="username"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="password" name="title" placeholder="password"/>
          </div>
            <input type="submit" className="btn btn-primary float-right" id="loginBtn" value="let's get travelin'" />
            <input type="button" className="btn btn-primary float-right" id="joinUsBtn" value="join us" />
            <input type="button" className="btn btn-warning float-right" id="cancelModal" value="cancel" />
          </form>
        </div>
                                                          {/* SignUp Modal */}
        <div className="modalBox" id="signUpModalBox">
        <div className="form-group">
          <h3>sign up</h3>
        </div>
          <form id="newSignUpSub" noValidate>
          <div className="form-group">
            <input type="text" className="form-control" id="signUpTitle" name="title" placeholder="username"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="password" name="title" placeholder="password"/>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" id="password2" name="title" placeholder="confirm password"/>
          </div>
            <input type="submit" className="btn btn-primary float-right" id="joinBtn" value="let's get travelin'" />
            <input type="submit" className="btn btn-primary float-right" id="logInPageBtn" value="i already have an account" />
            <input type="button" className="btn btn-warning float-right" id="cancelModal2" value="cancel" />
          </form>
        </div>
      </div>
    )
  }
}

export default Modal;
