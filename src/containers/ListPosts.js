import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShowPostLine from '../components/Body/ShowPostLine';
import { fetchPosts } from '../actions/post';
import Icon from 'react-icons-kit';
import { pen } from 'react-icons-kit/icomoon';

// Sorts and lists the posts for the given category
// and gives an icon to add a new post

class ListPosts extends Component {
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

  render() {
    const { sortValue, posts, category } = this.props;
    const sortedPosts = [] // inspired by https://stackoverflow.com/questions/43572436/sort-an-array-of-objects-in-react-and-render-them/43572944
      .concat(posts)
      .sort((a, b) => a[sortValue] < b[sortValue]);
    return (
      <div className="main">
        <ul>
          {sortedPosts.map(post => (
            <li key={post.title}>
              <ShowPostLine post={post} />
            </li>
          ))}
          <li key="newpost">
            <Link
              className="blacklink"
              to={!category ? 'udacity/newpost' : category + '/newpost'}
            >
              <Icon icon={pen} /> Add new post
            </Link>
          </li>
        </ul>
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
    sortValue: state.selections.sortValue,
    selectCat: state.selections.selectCat
  };
}

export default connect(mapStateToProps)(ListPosts);
