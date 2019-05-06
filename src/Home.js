import React, { Component } from 'react';
import HeroSplash from './components/Landing/HeroSplash'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav';

class Home extends Component {
    render() {
        return (
            <>
            <Nav />
            <HeroSplash />
            <Cards />
            </>
        )
    }
}

export default Home;
