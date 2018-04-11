import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowPostLine from '../components/Body/ShowPostLine';
import { fetchPosts } from '../actions/post';
import { selectSort } from '../actions/select';

import Dropdown from '../components/dropdown';

class ListPosts extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch, categories } = this.props;
    dispatch(fetchPosts(categories));
  }

  handleChange(nextSort) {
    this.props.dispatch(selectSort(nextSort));
  }

  render() {
    const { sortBy, posts } = this.props;
    return (
      <div>
        <Dropdown
          options={['score', 'recency']}
          selected={sortBy}
          onChange={this.handleChange}
        />
        <ul>
          {posts.map(post => (
            <li key={post.title}>
              <ShowPostLine post={post} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ListPosts.proptypes = {
  categories: PropTypes.array.isReqired,
  posts: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts.items || [],
    sortBy: state.selections.selectSort
  };
}

export default connect(mapStateToProps)(ListPosts);
