// TODO: presentation component for an indiv post
// TODO: data passed in props

import React from 'react';

const stylesImg = {
  width: '100%'
}

const Post = (props) => (
  <section className="PostList">
    <div className="card no-gutters">
      <div className="row">
        <div className="col-2">
          <img src="/images/Placeholder.png" alt="UserName" style={stylesImg}/>
        </div>
        <div className="col-10">
          Sorry, must dash! Pure mathematics can not lie! That's a relief. I hate babysitters. No. You're too short and bossy, and your nose is all funny. Rest is for the weary, sleep is for the dead. I feel like a hungry man eager for the feast!
        </div>
      </div>
    </div>
    <div className="card no-gutters">
      <div className="row">
        <div className="col-2">
          <img src="/images/Placeholder.png" alt="UserName" style={stylesImg}/>
        </div>
        <div className="col-10">
          Sorry, must dash! Pure mathematics can not lie! That's a relief. I hate babysitters. No. You're too short and bossy, and your nose is all funny. Rest is for the weary, sleep is for the dead. I feel like a hungry man eager for the feast!
        </div>
      </div>
    </div>
    <div className="card no-gutters">
      <div className="row">
        <div className="col-2">
          <img src="/images/Placeholder.png" alt="UserName" style={stylesImg}/>
        </div>
        <div className="col-10">
          Sorry, must dash! Pure mathematics can not lie! That's a relief. I hate babysitters. No. You're too short and bossy, and your nose is all funny. Rest is for the weary, sleep is for the dead. I feel like a hungry man eager for the feast!
        </div>
      </div>
    </div>
    <div className="card no-gutters">
      <div className="row">
        <div className="col-2">
          <img src="/images/Placeholder.png" alt="UserName" style={stylesImg}/>
        </div>
        <div className="col-10">
          Sorry, must dash! Pure mathematics can not lie! That's a relief. I hate babysitters. No. You're too short and bossy, and your nose is all funny. Rest is for the weary, sleep is for the dead. I feel like a hungry man eager for the feast!
        </div>
      </div>
    </div>
  </section>
)

export default Post;
