import React, { Component } from 'react';
import { connect } from 'react-redux';
import { votePost } from '../actions/post.js';

class ButtonBar extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <button
          onClick={() => {
            this.props.dispatch(votePost(post.id, 'upVote'));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.props.dispatch(votePost(post.id, 'downVote'));
          }}
        >
          -
        </button>
        <button onClick={null}>edit</button>
        <button onClick={null}>delete</button>
      </div>
    );
  }
}

export default connect()(ButtonBar);