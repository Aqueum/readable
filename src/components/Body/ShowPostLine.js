import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonBar from '../../containers/ButtonBar';
import timeConverter from '../../utils/timeconverter';

export default class ShowPostLine extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <Link to={post.category + '/' + post.id}>{post.title}</Link>
        <div className="byLine">
          by {post.author} on {timeConverter(post.timestamp)} ({
            post.commentCount
          }{' '}
          comments)
        </div>
        <ButtonBar type="post" item={post} score={post.voteScore} />
      </div>
    );
  }
}

ShowPostLine.propTypes = {
  post: PropTypes.object.isRequired
};
