import React, {Component} from 'react';
import './Modal.css';

class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modalBox">
          <form action="/login" method="POST">
              <div className="form-group">
                  <label for="username">username</label>
                  <input type="text" id="username" name="username" />
              </div>
              <div className="form-group">
                  <label for="password">password</label>
                  <input type="text" id="password" name="password" />
              </div>
              <input type="submit" value="let's get travelin'" />
          </form>
        </div>
      </div>
    )
  }
}

export default Modal;
