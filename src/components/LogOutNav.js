import React, {Component} from 'react';

class LogOutNav extends Component {
    
    handleLoggingOut = () => {
        console.log('logging out')
        this.logOut();
    };

    logOut = () => {
        console.log('clicked Logout');
        document.getElementById('logOutBtn').addEventListener('click', window.location.assign("/"))
    }

    componentDidMount () {
        document.getElementById('logOutBtn').addEventListener('click', this.handleLoggingOut);
    }

    render () {
        return (
            <div id="logout navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Wayfarer</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-item nav-link active" href="#" id="logOutBtn">log out<span className="sr-only">(current)</span></a>
                </div>
            </div>
            </nav>
        </div>
        )
    }
}

export default LogOutNav;