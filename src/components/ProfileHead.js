import React, {Component} from 'react';
import ProfileModel from '../models/Profile';

const stylesImg = {
  width: '100%',
  float: 'right'
}
class ProfileHead extends Component {
  state = {
    profile: ''
  }

  submitBioEdit = (e) => {
    e.preventDefault();
    console.log('submitting post info');
    document.querySelector('.editBioBlock').classList.add('hide');
    document.querySelector('.bioDisplay').classList.remove('hide');
    document.getElementById('cancelEdit').removeEventListener('click', this.closeEditBio);
    document.querySelector('.editBioBlock').removeEventListener('submit', this.submitBioEdit);
  }
  closeEditBio = () => {
    console.log('closing post modal');
    document.querySelector('.editBioBlock').classList.add('hide');
    document.querySelector('.bioDisplay').classList.remove('hide');
    document.getElementById('cancelEdit').removeEventListener('click', this.closeEditBio);
    document.querySelector('.editBioBlock').removeEventListener('submit', this.submitBioEdit);
  }
  openEditBio = () => {
    document.querySelector('.editBioBlock').classList.remove('hide');
    document.querySelector('.bioDisplay').classList.add('hide');
    document.getElementById('cancelEdit').addEventListener('click', this.closeEditBio);
    document.querySelector('.editBioBlock').addEventListener('submit', this.submitBioEdit);
  }
  getProfileId = () => {
    return window.location.pathname.replace(/^\/profile\/(.+)$/, '$1');
  }

  componentDidMount() {
    document.querySelector('.editButton').addEventListener('click', this.openEditBio);
    ProfileModel.getOne(this.getProfileId())
      .then((res) => {
        this.setState({profile: res.data});
      })
  }

  render() {
    let {username, preferredCity, signupDate, profilePicture} = this.state.profile;
    if (profilePicture === 'https://blog.za3k.com/wp-content/uploads/2015/03/default_profile_3.png') profilePicture = '/images/Placeholder.png';
    let signUp = new Date(signupDate);

    return (
  <div className="card no-gutters">
    <div className="row">
      <div className="col-5">
        <h2>{username}'s Profile</h2>
        <div className="bioDisplay">
          Name: {username}<br />
          Preferred City: {preferredCity}<br/>
          SignUp Date: {signUp.toDateString()}
        </div>
        <div className="editBioBlock hide">
          <form id="editBioForm" noValidate>
            <input type="text" className="form-control" id="userName" name="userName" defaultValue={username}/>
            <input type="text" className="form-control" id="cityList" name="preferredCity" defaultValue="Cities"/>
            <input type="submit" className="btn btn-primary float-right" id="submitEdit" value="Submit Edits" />
            <input type="button" className="btn btn-warning float-right" id="cancelEdit" value="Cancel" />
          </form>
        </div>
      </div>
      <div className="editButton col-1">
        <img src="/images/edit.png" alt="edit profile" />
      </div>
      <div className="col-6">
        <img src={profilePicture} alt={username} style={stylesImg}/>
      </div>
    </div>
  </div>
)
}
}
export default ProfileHead;
