import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonBar from '../../containers/ButtonBar';
import timeConverter from '../../utils/timeconverter';

// Presentational component that displays the detail of a comment
// the comment is passed to it in its props hence it doesn't interact with state

export default class ShowCommentDetail extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="main">
        <ul>
          <p> {comment.body} </p>
          <p className="byLine">
            by {comment.author} on {timeConverter(comment.timestamp)}
          </p>
          <ButtonBar type="comment" item={comment} score={comment.voteScore} />
        </ul>
      </div>
    );
  }
}

ShowCommentDetail.propTypes = {
  comment: PropTypes.object.isRequired
};
