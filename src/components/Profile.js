// TODO: presentation component to display profile info

import React from 'react';

const stylesImg = {
  width: '100%',
  float: 'right'
}
const Profile = (props) => {
  return (
  <div className="card no-gutters">
    <div className="row">
      <div className="col-5">
        <h2>UserName Profile</h2>
        <div className="bioDisplay">
          Name: myzCool lAstName<br />
          Preferred City: San Francisco<br/>
          SignUp Date: DATE
        </div>
        <div className="editBioBlock hide">
          <form id="editBioForm" noValidate>
            <input type="text" className="form-control" id="userName" name="userName" value="some cool name"/>
            <input type="text" className="form-control" id="cityList" name="preferredCity" value="Cities"/>
            <input type="submit" className="btn btn-primary float-right" id="submitEdit" value="Submit Edits" />
            <input type="button" className="btn btn-warning float-right" id="cancelEdit" value="Cancel" />
          </form>
        </div>
      </div>
      <div className="editButton col-1">
        <img src="/images/edit.png" alt="edit profile" />
      </div>
      <div className="col-6">
        <img src="/images/Placeholder.png" alt="UserName" style={stylesImg}/>
      </div>
    </div>
  </div>
)
}
export default Profile;
