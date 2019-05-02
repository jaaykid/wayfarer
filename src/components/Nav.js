import React from 'react';

const nav = () => {
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
                <a className="nav-item nav-link" href="#">log in</a>
                <a className="nav-item nav-link" href="#">sign up</a>
                </div>
            </div>
            </nav>
        </div>
  )
}

export default nav;