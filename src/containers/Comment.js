import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowCommentDetail from '../components/Comment/ShowCommentDetail';
import { getComment } from '../actions/comment';

// A container that gets the relevant comment
// calls Header & sends the comment to ShowCommentDetail for display
// or gives a 404 if the comment isn't found

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
            <ShowCommentDetail comment={comment} />
          </div>
        ) : (
          <div>
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

const mapStateToProps = state => ({
  comment: state.comments.item || {}
});

export default connect(mapStateToProps)(Comment);
