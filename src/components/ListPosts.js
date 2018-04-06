import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { votePost } from '../actions/post.js';

export default class ListPosts extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.posts.map(post => (
            <li key={post.title}>
              <strong>{post.title}</strong> by {post.author}
              , {post.commentCount} comments, score = {post.voteScore}
              <button onClick={votePost(post.id, 'upVote')}>+</button>
              <button onClick={votePost(post.id, 'upVote')}>-</button>
              <button onClick={null}>edit</button>
              <button onClick={null}>delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ListPosts.propTypes = {
  posts: PropTypes.array.isRequired
  //upVote: PropTypes.func.isRequired
};
