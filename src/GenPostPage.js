//container for displaying Profile info
//          and all posts for that user
//calls PostsContainer: to get the posts from db
//                      and call each Post
//calls Cities for the sidebar

import React, {Component} from 'react';
import ProfileHead from './components/ProfileHead';
import CityHead from './components/CityHead';
import Cities from './components/Cities';
import PostsContainer from './containers/PostsContainer';
import ModalPost from './components/ModalPost';

class GenPostPage extends Component {


  render() {
    let pageType, heading, headComp, addPostbtn = '';
    if (this.props.match.path === '/profile' ) {
      pageType = 'profile';
      heading = 'Your Posts';
      headComp = <ProfileHead />;
    } else {
      pageType = 'city';
      heading = 'Posts';
      headComp = <CityHead />;
      addPostbtn = <img src="/images/addPost.png" alt="Add a post" id="addPost"/>;
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <Cities />
          <div className="col-md-8">
            {headComp}
            <div className="postHead row">
              <div className="col-1"> </div>
              <h2 className="col-9">{heading}</h2>
              <div className="col-1">
                {addPostbtn}
              </div>
              <div className="col-1"> </div>
            </div>
          <PostsContainer postType={pageType}/>
          </div>
        </div>
        <ModalPost />
      </div>
    )
  }
}

export default GenPostPage;
