import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';
import ButtonBar from '../../containers/ButtonBar';
import timeConverter from '../../utils/timeconverter';

export default class ShowPostLine extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div>
        {comment.title} by {comment.author} on{' '}
        {timeConverter(comment.timestamp)}
        , score = {comment.voteScore}
        <ButtonBar post={comment} />
      </div>
    );
  }
}

ShowPostLine.propTypes = {
  comment: PropTypes.object.isRequired
};

/*
<Link to={post.category + '/' + post.id}>{post.title}</Link>
*/
