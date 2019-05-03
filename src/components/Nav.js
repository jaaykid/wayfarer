import React, {Component} from 'react';
import Modal from './Modal';

class Nav extends Component  {
  state = {
    login: false
  }

  handleLogin = () => {
    console.log('you clicked it')
   this.setState({login: true});
   document.querySelector('.modal').classList.add('display');
   this.handleLoginModal();
  };
  
  handleLoginModal = () => {
      document.getElementById('cancelModal').addEventListener('click', this.closeLoginModal);
      document.getElementById('loginBtn').addEventListener('click', this.submitLogin);
  }

  submitLogin = (e) => {
  e.preventDefault();
  console.log('submitting login info');
  document.getElementById('loginModal').classList.remove('display');
  document.getElementById('newLoginSub').removeEventListener('submit', this.submitLogin);
}

  closeLoginModal = () => {
    console.log('closing login modal');
    document.getElementById('loginModal').classList.remove('display');
    document.getElementById('cancelModal').removeEventListener('click', this.closeLoginModal);
  }

  handleSignUp = () => {
      console.log('clicked sign up');
      this.setState({login:true});
      document.querySelector('.modal').classList.add('display');
      this.handleLoginModal();
  };


  componentDidMount() {
    document.getElementById('login').addEventListener('click', this.handleLogin);
    document.getElementById('signup').addEventListener('click', this.handleSignUp);
  }


  render() {
    return (
      <div id="navbar">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Wayfarer</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#">home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="#" id="login">log in</a>
              <a className="nav-item nav-link" href="#" id="signup">sign up</a>
              </div>
          </div>
          </nav>
          <Modal />
      </div>
    )
  }
}

export default Nav;
