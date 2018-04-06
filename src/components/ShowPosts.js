import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShowPosts extends Component {
  render() {
    return (
      <div>
        {this.props.posts.map(post => (
          <div key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>
              by {post.author}, {post.commentCount} comments, score ={' '}
              {post.voteScore}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

ShowPosts.propTypes = {
  posts: PropTypes.array.isRequired
};
