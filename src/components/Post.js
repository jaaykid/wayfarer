import React from 'react';
import {Link} from 'react-router-dom';

const Post = (props) => (
    <div className="card no-gutters">
      <div className="row">
        <div className="col-2">
          <img src="/images/Placeholder.png" alt="UserName"/>
        </div>
        <div className="col-10">
        <h3><Link to={`/post/${props.post._id}`}>{props.post.title}</Link></h3>
          {props.post.comment}
        </div>
      </div>
    </div>
)

export default Post;
