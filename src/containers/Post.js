import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import ShowPostDetail from '../components/Body/ShowPostDetail';
import { getPost } from '../actions/post';

/*
I'm not massively happy with the efficiency of this:
we're taking something that may already be in state in posts.items
and readding it as post.item, because if we don't then going straight to
http://localhost:3000/react/8xf0y6ziyjabvozdd253nd could be empty
*/

class Post extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPost(this.props.match.params.postid));
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        {post.id ? (
          <div>
            <Header show="cat" cat={this.props.match.params.category} />
            <ShowPostDetail post={post} />
          </div>
        ) : (
          <div>
            <Header show="cat" cat={this.props.match.params.category} />
            <h1>404: Page Not Found</h1>
            <p>
              {' '}
              a post with id: {this.props.match.params.postid} can't be found{' '}
            </p>
            <a href="http://www.aqueum.com/contact/">
              let us know there's a problem
            </a>
          </div>
        )}
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

// inspired by https://stackoverflow.com/questions/34840994/javascript-redux-how-to-get-an-element-from-store-by-id
const mapStateToProps = (state, ownProps) => ({
  post: state.posts.item || {}
});

export default connect(mapStateToProps)(Post);
