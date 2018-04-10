import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import ShowPostDetail from '../components/Body/ShowPostDetail';
import { getPost } from '../actions/post';

class Post extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    console.log(this.props.match.params.postid);
    dispatch(getPost(this.props.match.params.postid));
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <Header show="cat" cat={this.props.match.params.category} />
        <ShowPostDetail post={post} />
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

// inspired by https://stackoverflow.com/questions/34840994/javascript-redux-how-to-get-an-element-from-store-by-id
const mapStateToProps = (state, ownProps) => ({
  post: state.posts.item || {}
});

export default connect(mapStateToProps)(Post);
