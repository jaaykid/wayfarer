import axios from 'axios';

const POST_API = 'https://blogging-tingsv2.herokuapp.com/api/v1/posts';

class PostModel {
  static all() {
    return axios.get(POST_API);
  }
  static getOne(id) {
    return axios.get(`${POST_API}/${id}`);
  }
}

export default CityModel;
