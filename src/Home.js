import React, { Component } from 'react';
import HeroSplash from './components/Landing/HeroSplash'
import Cards from './components/Cards/Cards'

class Home extends Component {
    render() {
        return (
            <>
            <HeroSplash />
            <Cards />
            </>
        )
    }
}

export default Home;
