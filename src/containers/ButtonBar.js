import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { votePost, delPost } from '../actions/post.js';
import { voteComment, delComment } from '../actions/comment.js';
import Icon from 'react-icons-kit';
import { smile, sad } from 'react-icons-kit/icomoon';

class ButtonBar extends Component {
  render() {
    const { type, item, dispatch, score } = this.props;
    return (
      <div className="buttonBar">
        <Icon
          icon={smile}
          onClick={() => {
            type === 'post'
              ? dispatch(votePost(item.id, 'upVote'))
              : dispatch(voteComment(item.id, 'upVote'));
          }}
        />
        {score}
        <Icon
          icon={sad}
          onClick={() => {
            type === 'post'
              ? dispatch(votePost(item.id, 'downVote'))
              : dispatch(voteComment(item.id, 'downVote'));
          }}
        />
        {type === 'post' ? (
          <Link to={'/' + item.category + '/' + item.id + '/edit'}>
            <button className="button">edit</button>
          </Link>
        ) : (
          <Link to={'/comment/' + item.id + '/edit'}>
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
        <p />
      </div>
    );
  }
}

ButtonBar.propTypes = {
  type: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  score: PropTypes.number.isRequired
};

export default connect()(ButtonBar);
