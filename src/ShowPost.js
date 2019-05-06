import React, {Component} from 'react';
import LoginNav from './components/LoginNav';

class ShowPost extends Component {

  render() {
    // console.log(this.props);
    return (
      <>
      <LoginNav />
      <div className="card no-gutters">
        <div className="row">
          <div className="col-2">
            <img src="/images/Placeholder.png" alt="UserName"/>
          </div>
          <div className="col-10">
          <h3>Post title</h3>
          <h4>by USERNAME</h4>
            Sorry, must dash! Pure mathematics can not lie! That's a relief. I hate babysitters. No. You're too short and bossy, and your nose is all funny. Rest is for the weary, sleep is for the dead. I feel like a hungry man eager for the feast!
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default ShowPost;
