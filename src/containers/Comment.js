import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ShowCommentDetail from '../components/Comment/ShowCommentDetail';
import { getComment } from '../actions/comment';
import NotFound from '../components/NotFound';

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
          <NotFound
            message={
              'a comment with ID of ' +
              this.props.match.params.commentid +
              " can't be found"
            }
          />
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
