import React from 'react';
import {Link} from 'react-router-dom';

const City = (props) => (
  <div className="card no-gutters">
    <div className="row">
      <div className="col-4">
        <img src={props.city.image} alt={`${props.city.city}`} />
      </div>
      <div className="col-8">
        <Link to={`/city/${props.city._id}`}>{props.city.city}</Link>
      </div>
    </div>
  </div>
)

export default City;
