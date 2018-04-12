import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { votePost, delPost } from '../actions/post.js';

class ButtonBar extends Component {
  render() {
    const { post, dispatch } = this.props;
    return (
      <div>
        <button
          onClick={() => {
            dispatch(votePost(post.id, 'upVote'));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(votePost(post.id, 'downVote'));
          }}
        >
          -
        </button>
        <Link to={'/' + post.category + '/' + post.id + '/edit'}>
          <button>edit</button>
        </Link>
        <button
          onClick={() => {
            dispatch(delPost(post.id));
          }}
        >
          delete
        </button>
      </div>
    );
  }
}

ButtonBar.propTypes = {
  post: PropTypes.object.isRequired
};

export default connect()(ButtonBar);
