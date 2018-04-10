import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonBar from './ButtonBar';

class ListPosts extends Component {
  constructor(props) {
    // dropdown inspired by https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
    super(props);
    this.state = {
      value: 'voteScore',
      options: [
        {
          name: 'Score',
          value: 'voteScore'
        },
        {
          name: 'Recency',
          value: 'timestamp'
        }
      ]
    };
  }
  render() {
    const createItem = (item, key) => (
      <option key={key} value={item.value}>
        {item.name}
      </option>
    );
    const sortedPosts = [] // inspired by https://stackoverflow.com/questions/43572436/sort-an-array-of-objects-in-react-and-render-them/43572944
      .concat(this.props.posts)
      .sort((a, b) => a[this.state.value] < b[this.state.value]);
    return (
      <div>
        <div>
          Sort by:{' '}
          <select
            onChange={event => this.setState({ value: event.target.value })}
            value={this.state.value}
          >
            {this.state.options.map(createItem)}
          </select>
        </div>
        <div>
          <ul>
            {sortedPosts.map(post => (
              <li key={post.title}>
                <Link to={post.category + '/' + post.id}>{post.title}</Link> by{' '}
                {post.author}
                , {post.commentCount} comments, score = {post.voteScore}, time ={' '}
                {post.timestamp}
                <ButtonBar post={post} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ListPosts.propTypes = {
  posts: PropTypes.array.isRequired
  //upVote: PropTypes.func.isRequired
};

export default ListPosts;
