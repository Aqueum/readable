import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonBar from '../../containers/ButtonBar';
import timeConverter from '../../utils/timeconverter';

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
