import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../containers/Header';
import ShowCommentDetail from '../components/Comment/ShowCommentDetail';
import { getComment } from '../actions/comment';

class Comment extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getComment(this.props.match.params.commentid));
  }

  render() {
    const { comment } = this.props;
    return (
      <div>
        {comment.id ? (
          <div>
            <Header cat="" />
            <ShowCommentDetail comment={comment} />
          </div>
        ) : (
          <div>
            <Header cat="" />
            <div className="main">
              <h1>404: Page Not Found</h1>
              <p>
                {' '}
                a comment with id: {this.props.match.params.commentid} can't be
                found{' '}
              </p>
              <a href="http://www.aqueum.com/contact/">
                let us know there's a problem
              </a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

// inspired by https://stackoverflow.com/questions/34840994/javascript-redux-how-to-get-an-element-from-store-by-id
const mapStateToProps = (state, ownProps) => ({
  comment: state.comments.item || {}
});

export default connect(mapStateToProps)(Comment);
