import React from 'react';
import hero_img from './hero.jpg';
import './Landing.css';

const HeroSplash = () => {
    return (
        <div id="hero-img">
            <h1>travel with wayfarer on your side</h1>
                <img src={hero_img} alt="nature backdrop" />
        </div>

    )
}

export default HeroSplash;
