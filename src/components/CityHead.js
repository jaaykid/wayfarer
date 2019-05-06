import React, {Component} from 'react';
import CityModel from '../models/City';


class CityHead extends Component {
  state = {
    city: ''
  }

  submitPost = (e) => {
    e.preventDefault();
    console.log('submitting post info');
    document.getElementById('postModal').classList.remove('display');
    document.getElementById('newPostSub').removeEventListener('submit', this.submitPost);
    document.getElementById('cancelPost').removeEventListener('click', this.closePostModal);
  }
  closePostModal = () => {
    console.log('closing post modal');
    document.getElementById('postModal').classList.remove('display');
    document.getElementById('cancelPost').removeEventListener('click', this.closePostModal);
    document.getElementById('newPostSub').removeEventListener('submit', this.submitPost);
  }
  openPostModal = () => {
    document.getElementById('postModal').classList.add('display');
    document.getElementById('cancelPost').addEventListener('click', this.closePostModal);
    document.getElementById('newPostSub').addEventListener('submit', this.submitPost);
  }

  getCityId = () => {
    return window.location.pathname.replace(/^\/city\/(.+)$/, '$1');
  }

  componentDidMount() {
    document.getElementById('addPost').addEventListener('click', this.openPostModal);

    CityModel.getOne(this.getCityId())
      .then((res) => {
        this.setState({city: res.data[0]});
      })
  }

  render() {
    return (
      <div className="card no-gutters">
        <div className="row">
          <div className="col-4">
            <h2>{this.state.city.city}</h2>
            <h3>{this.state.city.description}</h3>
          </div>
          <div className="col-8">
            <img src={this.state.city.image} alt={this.state.city.city} />
          </div>
        </div>
      </div>
    )
  }
}
export default CityHead;
