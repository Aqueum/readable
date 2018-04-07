import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { votePost } from '../actions/post.js';

export default class ListPosts extends Component {
  render() {
    console.log(this.props.posts);
    const sortby = 'score';
    const sortedPosts = [] // inspired by https://stackoverflow.com/questions/43572436/sort-an-array-of-objects-in-react-and-render-them/43572944
      .concat(this.props.posts)
      .sort(
        (a, b) =>
          sortby === 'score'
            ? a.voteScore < b.voteScore
            : a.timestamp < b.timestamp
      );
    return (
      <div>
        <ul>
          {sortedPosts.map(post => (
            <li key={post.title}>
              <Link to={post.category + '/' + post.id}>{post.title}</Link> by{' '}
              {post.author}
              , {post.commentCount} comments, score = {post.voteScore}, time ={' '}
              {post.timestamp}
              <button onClick={votePost(post.id, 'upVote')}>+</button>
              <button onClick={votePost(post.id, 'downVote')}>-</button>
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
