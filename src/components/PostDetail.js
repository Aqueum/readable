import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { votePost } from '../actions/post.js';

export default class ListPosts extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <ul>
          <h2>{post.title}</h2>
          <p> {post.body} </p>
          by {post.author}
          , {post.commentCount} comments, score = {post.voteScore}
          <button onClick={votePost(post.id, 'upVote')}>+</button>
          <button onClick={votePost(post.id, 'downVote')}>-</button>
          <button onClick={null}>edit</button>
          <button onClick={null}>delete</button>
        </ul>
      </div>
    );
  }
}

ListPosts.propTypes = {
  post: PropTypes.array.isRequired
};
