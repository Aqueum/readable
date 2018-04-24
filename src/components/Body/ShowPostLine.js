import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonBar from '../../containers/ButtonBar';
import timeConverter from '../../utils/timeconverter';

// Presentational component that displays a summary line for a post
// & links to the detail page (is using react-router-dom allowed in presentational components?)
// the post is passed to it in its props hence it doesn't interact with state

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
