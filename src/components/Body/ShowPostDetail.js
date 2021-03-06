import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonBar from '../../containers/ButtonBar';
import timeConverter from '../../utils/timeconverter';

// Presentational component that displays the detail of a post
// the post is passed to it in its props hence it doesn't interact with state

export default class ShowPostDetail extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="main">
        <ul>
          <h2>{post.title}</h2>
          <p> {post.body} </p>
          <p className="byLine">
            by {post.author} on {timeConverter(post.timestamp)}
          </p>
          <ButtonBar type="post" item={post} score={post.voteScore} />
          <hr />
          <p className="comments">{post.commentCount} comments:</p>
        </ul>
      </div>
    );
  }
}

ShowPostDetail.propTypes = {
  post: PropTypes.object.isRequired
};
