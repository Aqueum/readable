import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonBar from '../../containers/ButtonBar';
import timeConverter from '../../utils/timeconverter';

// Presentational component that displays a summary line of a comment
// & links to the detail page (is using react-router-dom allowed in presentational components?)
// the comment is passed to it in its props hence it doesn't interact with state

export default class ShowPostLine extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div>
        <Link to={'/comment/' + comment.id}>{comment.author}</Link>
        <p className="byLine">on {timeConverter(comment.timestamp)}</p>
        <ButtonBar type="comment" item={comment} score={comment.voteScore} />
      </div>
    );
  }
}

ShowPostLine.propTypes = {
  comment: PropTypes.object.isRequired
};
