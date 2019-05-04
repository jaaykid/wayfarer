import React, { Component } from 'react';
import Nav from './components/Nav';
import TheRoutes from './config/Routes';

class App extends Component {
  render () {
    return(
      <>
        <Nav /> 
        {TheRoutes}
      </>
    )
  }
}

export default App;
