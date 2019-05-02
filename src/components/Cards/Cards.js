import React from 'react';
import './Cards.css';


const styles = {
    width: '18rem'
}

const Cards = () => {
    return (
    <div id="allCards" className="d-flex justify-content-around">    
    <div id="cardOne">
        <div className="card" style={styles}>
            <div className="card-body">
                <h5 className="card-title">you travel</h5>
                <p className="card-text">post it all</p>
            </div>
        </div>
    </div>
    <div id="cardTwo">
        <div className="card" style={styles}>
            <div className="card-body">
                <h5 className="card-title">we travel</h5>
                <p className="card-text">kick back</p>
            </div>
        </div>
    </div>
        <div id="cardThree">
        <div className="card" style={styles}>
            <div className="card-body">
                <h5 className="card-title">we all travel</h5>
                <p className="card-text">spend money</p>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Cards