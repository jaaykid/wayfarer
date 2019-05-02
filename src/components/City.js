// TODO: presentation component to display city header

import React from 'react';

const stylesImg = {
  width: '100%'
}

const City = () => (
  <div className="card no-gutters">
    <div className="row">
      <div className="col-4">
        <h2>San Francisco Posts</h2>
      </div>
      <div className="col-8">
        <img src="/images/cities/SF.jpg" alt="San Francisco skyline" style={stylesImg}/>
      </div>
    </div>
  </div>
)

export default City;
