import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import PostDetail from '../components/PostDetail';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <Header show="cat" cat={this.props.match.params.category} />
        <PostDetail post={post} />
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
  post: _.find(state.posts.items, 'id', ownProps.match.params.postid) || {}
});

export default connect(mapStateToProps)(Post);
