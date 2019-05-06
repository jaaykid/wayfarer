// TODO: sidebar presentation component of cities
// TODO: click a city links to "/cities/:cityId"

import React, {Component} from 'react';
import City from './City';
import CityModel from '../models/City';

class Cities extends Component {
  state = {cities: []}

  componentDidMount() {
    CityModel.all()
      .then((res) => {
        let cities = res.data.map(city => {
          return <City city={city} key={city._id} />
        })
        this.setState({cities});
      })
  }
  render() {
    return (
      <div className="col-md-4">
        <aside>
          {this.state.cities}
        </aside>
      </div>
    )
  }
}
export default Cities;
