import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { votePost, delPost } from '../actions/post.js';
import { voteComment, delComment } from '../actions/comment.js';

class ButtonBar extends Component {
  render() {
    const { type, item, dispatch } = this.props;
    console.log(item);
    return (
      <div>
        <button
          className="button"
          onClick={() => {
            type === 'post'
              ? dispatch(votePost(item.id, 'upVote'))
              : dispatch(voteComment(item.id, 'upVote'));
          }}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => {
            type === 'post'
              ? dispatch(votePost(item.id, 'downVote'))
              : dispatch(voteComment(item.id, 'downVote'));
          }}
        >
          -
        </button>
        {type === 'post' ? (
          <Link to={'/' + item.category + '/' + item.id + '/edit'}>
            <button className="button">edit</button>
          </Link>
        ) : (
          <Link to={'/erm-this-one-needs-fixing'}>
            <button className="button">edit</button>
          </Link>
        )}
        <button
          className="button"
          onClick={() => {
            type === 'post'
              ? dispatch(delPost(item.id))
              : dispatch(delComment(item.id));
          }}
        >
          delete
        </button>
      </div>
    );
  }
}

ButtonBar.propTypes = {
  type: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired
};

export default connect()(ButtonBar);
