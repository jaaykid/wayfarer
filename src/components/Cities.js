// TODO: sidebar presentation component of cities
// TODO: click a city links to "/cities/:cityId"

import React from 'react';

const stylesImg = {
  width: '100%'
}

const Cities = () => (
  <aside>
      <div className="card no-gutters">
        <div className="row">
          <div className="col-4">
            <img src="/images/cities/SF.jpg" alt="San Francisco skyline" style={stylesImg}/>
          </div>
          <div className="col-8">
            San Francisco
          </div>
        </div>
      </div>
      <div className="card row no-gutters">
        <div className="row">
          <div className="col-4">
            <img src="/images/cities/SF.jpg" alt="San Francisco skyline" style={stylesImg}/>
          </div>
          <div className="col-8">
            San Francisco
          </div>
        </div>
      </div>
      <div className="card row no-gutters">
        <div className="row">
          <div className="col-4">
            <img src="/images/cities/SF.jpg" alt="San Francisco skyline" style={stylesImg}/>
          </div>
          <div className="col-8">
            San Francisco
          </div>
        </div>
      </div>
  </aside>
)

export default Cities;
