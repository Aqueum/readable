import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ShowPosts from '../components/ShowPosts';
import { fetchPosts } from '../actions/post';

class Header extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPosts(''));
  }

  render() {
    return (
      <div>
        <ShowPosts posts={this.props.posts} />
      </div>
    );
  }
}

Header.proptypes = {
  categories: PropTypes.array.isReqired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts.items || []
  };
}

export default connect(mapStateToProps)(Header);
