import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonBar from '../../containers/ButtonBar';

export default class ShowCommentDetail extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div className="main">
        <ul>
          <p> {comment.body} </p>
          <p>by {comment.author}</p>
          <p>score = {comment.voteScore}</p>
          <ButtonBar type="comment" item={comment} />
        </ul>
      </div>
    );
  }
}

ShowCommentDetail.propTypes = {
  comment: PropTypes.object.isRequired
};
