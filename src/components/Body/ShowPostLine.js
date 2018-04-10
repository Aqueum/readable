import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonBar from '../../containers/ButtonBar';

export default class ShowPostLine extends Component {
  render() {
    const { post } = this.props;
    return (
      <div>
        <Link to={post.category + '/' + post.id}>{post.title}</Link> by{' '}
        {post.author}
        , {post.commentCount} comments, score = {post.voteScore}, time ={' '}
        {post.timestamp}
        <ButtonBar post={post} />
      </div>
    );
  }
}

ShowPostLine.propTypes = {
  post: PropTypes.object.isRequired
};
