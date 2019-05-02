import React, { Component } from 'react';
import Hero_Splash from './components/Landing/Hero_Splash'
import Cards from './components/Cards/Cards'

class Home extends Component {
    render() {
        return (
            <>
            <Hero_Splash />
            <Cards />
            </>
        )
    }
}

export default Home;
