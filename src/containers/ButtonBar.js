import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { votePost, delPost } from '../actions/post.js';
import { voteComment, delComment } from '../actions/comment.js';
import Icon from 'react-icons-kit';
import { smile, sad, pencil, bin } from 'react-icons-kit/icomoon';

// A bar of buttons with the current score, that can be used to
// upvote, downvote, edit & delete
// item (post or comment) it is called with
// type is whether the calling item is a post or comment
// score of the current item is displayed

class ButtonBar extends Component {
  render() {
    const { type, item, dispatch, score } = this.props;
    return (
      <div className="buttonBar">
        <Icon
          icon={smile}
          alt="upVote"
          onClick={() => {
            type === 'post'
              ? dispatch(votePost(item.id, 'upVote'))
              : dispatch(voteComment(item.id, 'upVote'));
          }}
        />
        <span className="score">{score}</span>
        <Icon
          icon={sad}
          alt="downVote"
          onClick={() => {
            type === 'post'
              ? dispatch(votePost(item.id, 'downVote'))
              : dispatch(voteComment(item.id, 'downVote'));
          }}
        />{' '}
        {type === 'post' ? (
          <Link
            className="blacklink"
            to={'/' + item.category + '/' + item.id + '/edit'}
          >
            <Icon icon={pencil} alt="edit" />
          </Link>
        ) : (
          <Link className="blacklink" to={'/comment/' + item.id + '/edit'}>
            <Icon icon={pencil} alt="edit" />
          </Link>
        )}{' '}
        <Icon
          icon={bin}
          alt="delete"
          onClick={() => {
            type === 'post'
              ? dispatch(delPost(item.id))
              : dispatch(delComment(item.id));
          }}
        />
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
