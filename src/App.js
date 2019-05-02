import React, { Component } from 'react';
// TODO: connect to nav
//import Nav from './components/Nav';
import TheRoutes from './config/Routes';

class App extends Component {
  render () {
    return(
      <>
        {/*<Nav /> header/nav*/}
        {TheRoutes}
      </>
    )
  }
}

export default App;
