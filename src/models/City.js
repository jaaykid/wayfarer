import axios from 'axios';

const CITY_API = 'https://blogging-tingsv2.herokuapp.com/api/v1/cities';

class CityModel {
  static all() {
    return axios.get(CITY_API);
  }
}

export default CityModel;
