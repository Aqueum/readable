import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ListPosts from '../components/ListPosts';
import { fetchPosts } from '../actions/post';

class List extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts(''));
  }

  render() {
    return (
      <div>
        <ListPosts posts={this.props.posts} />
      </div>
    );
  }
}

List.proptypes = {
  categories: PropTypes.array.isReqired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts.items || []
  };
}

export default connect(mapStateToProps)(List);
