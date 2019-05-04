// TODO: sidebar presentation component of cities
// TODO: click a city links to "/cities/:cityId"

import React from 'react';
import {Link} from 'react-router-dom';

const Cities = () => (
  <aside>
      <div className="card no-gutters">
        <div className="row">
          <div className="col-4">
            <img src="/images/cities/SF.jpg" alt="San Francisco skyline" />
          </div>
          <div className="col-8">
            <Link to="/city">San Francisco</Link>
          </div>
        </div>
      </div>
      <div className="card row no-gutters">
        <div className="row">
          <div className="col-4">
            <img src="/images/cities/SF.jpg" alt="San Francisco skyline" />
          </div>
          <div className="col-8">
            <Link to="/city">San Francisco</Link>
          </div>
        </div>
      </div>
      <div className="card row no-gutters">
        <div className="row">
          <div className="col-4">
            <img src="/images/cities/SF.jpg" alt="San Francisco skyline" />
          </div>
          <div className="col-8">
            <Link to="/city">San Francisco</Link>
          </div>
        </div>
      </div>
  </aside>
)

export default Cities;
