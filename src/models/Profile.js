import axios from 'axios';

const PROFILE_API = 'https://blogging-tingsv2.herokuapp.com/api/v1/profiles';

class ProfileModel {
  static getOne(id) {
    return axios.get(`${PROFILE_API}/${id}`);
  }
}

export default ProfileModel;
