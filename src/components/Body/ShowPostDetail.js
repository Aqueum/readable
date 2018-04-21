import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonBar from '../../containers/ButtonBar';

export default class ShowPostDetail extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <ul>
          <h2>{post.title}</h2>
          <p> {post.body} </p>
          <p>by {post.author}</p>
          <p>score = {post.voteScore}</p>
          <ButtonBar type="post" item={post} />
          <p>{post.commentCount} comments:</p>
        </ul>
      </div>
    );
  }
}

ShowPostDetail.propTypes = {
  post: PropTypes.object.isRequired
};
