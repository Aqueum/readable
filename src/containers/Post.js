import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import PostDetail from '../components/PostDetail';

class Post extends Component {
  render() {
    const { post } = this.state;
    return (
      <div>
        <Header show="cat" cat={post.category} />
        <PostDetail post={post} />
      </div>
    );
  }
}

Post.propTypes = {
  posts: PropTypes.array.isRequired,
  post: PropTypes.array.isRequired,
  match: PropTypes.array.isRequired
};

// inspired by https://stackoverflow.com/questions/34840994/javascript-redux-how-to-get-an-element-from-store-by-id
const mapStateToProps = (state, ownProps) => ({
  post: _.find(state, 'id', ownProps.match.params.postid) || []
});

export default connect(mapStateToProps)(Post);
