// TODO: presentation component for an indiv post
// TODO: data passed in props

import React from 'react';
import {Link} from 'react-router-dom';

const Post = () => (
  <section className="PostList">
    <div className="card no-gutters">
      <div className="row">
        <div className="col-2">
          <img src="/images/Placeholder.png" alt="UserName"/>
        </div>
        <div className="col-10">
          <h3><Link to={{pathname: "/post", state:{data: "something cool"}}}>Post title</Link></h3>
          Sorry, must dash! Pure mathematics can not lie! That's a relief. I hate babysitters. No. You're too short and bossy, and your nose is all funny. Rest is for the weary, sleep is for the dead. I feel like a hungry man eager for the feast!
        </div>
      </div>
    </div>
    <div className="card no-gutters">
      <div className="row">
        <div className="col-2">
          <img src="/images/Placeholder.png" alt="UserName"/>
        </div>
        <div className="col-10">
        <h3><Link to="/post">Post title</Link></h3>
          Sorry, must dash! Pure mathematics can not lie! That's a relief. I hate babysitters. No. You're too short and bossy, and your nose is all funny. Rest is for the weary, sleep is for the dead. I feel like a hungry man eager for the feast!
        </div>
      </div>
    </div>
    <div className="card no-gutters">
      <div className="row">
        <div className="col-2">
          <img src="/images/Placeholder.png" alt="UserName"/>
        </div>
        <div className="col-10">
        <h3><Link to="/post">Post title</Link></h3>
          Sorry, must dash! Pure mathematics can not lie! That's a relief. I hate babysitters. No. You're too short and bossy, and your nose is all funny. Rest is for the weary, sleep is for the dead. I feel like a hungry man eager for the feast!
        </div>
      </div>
    </div>
    <div className="card no-gutters">
      <div className="row">
        <div className="col-2">
          <img src="/images/Placeholder.png" alt="UserName"/>
        </div>
        <div className="col-10">
        <h3><Link to="/post">Post title</Link></h3>
          Sorry, must dash! Pure mathematics can not lie! That's a relief. I hate babysitters. No. You're too short and bossy, and your nose is all funny. Rest is for the weary, sleep is for the dead. I feel like a hungry man eager for the feast!
        </div>
      </div>
    </div>
  </section>
)

export default Post;
