import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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
    const { dispatch, category } = this.props;
    dispatch(fetchPosts(category));
  }

  // A fudge I inserted because the list wouldn't update
  componentWillReceiveProps(nextProps) {
    if (nextProps.selectCat !== this.props.selectCat) {
      const { dispatch, category } = nextProps;
      dispatch(fetchPosts(category));
    }
  }

  handleChange(nextSort) {
    this.props.dispatch(selectSort(nextSort));
  }

  render() {
    const { selectSort, sortValue, posts } = this.props;
    const sortedPosts = [] // inspired by https://stackoverflow.com/questions/43572436/sort-an-array-of-objects-in-react-and-render-them/43572944
      .concat(posts)
      .sort((a, b) => a[sortValue] < b[sortValue]);
    return (
      <div>
        Sort by:
        <Dropdown
          options={['score', 'recency']}
          selected={selectSort}
          onChange={this.handleChange}
        />
        <ul>
          {sortedPosts.map(post => (
            <li key={post.title}>
              <ShowPostLine post={post} />
            </li>
          ))}
        </ul>
        <Link to="/newpost">
          <button className="button">New post</button>
        </Link>
      </div>
    );
  }
}

ListPosts.proptypes = {
  category: PropTypes.string.isReqired,
  posts: PropTypes.array,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts.items || [],
    selectSort: state.selections.selectSort,
    sortValue: state.selections.sortValue,
    selectCat: state.selections.selectCat
  };
}

export default connect(mapStateToProps)(ListPosts);
