import React, { Component } from 'react';
import Nav from './components/Nav';
import TheRoutes from './config/Routes';
import LogOutNav from './components/LogOutNav';

class App extends Component {
  render () {
    let nav = '';
    if (/^\/$/.test(window.location.pathname)) {
      nav = <Nav />
    } else {
      nav = <LogOutNav />
    }
    return(
      <>
        {nav}
        {TheRoutes}
      </>
    )
  }
}

export default App;
