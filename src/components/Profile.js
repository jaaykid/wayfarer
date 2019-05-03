// TODO: presentation component to display profile info

import React from 'react';

const stylesImg = {
  width: '100%',
  float: 'right'
}

const Profile = () => (
  <div className="card no-gutters">
    <div className="row">
      <div className="col-6">
        <h2>UserName Posts</h2>
        Name, City, SignUp Date *edit me
      </div>
      <div className="col-6">
        <img src="/images/Placeholder.png" alt="UserName" style={stylesImg}/>
      </div>
    </div>
  </div>
)

export default Profile;
