import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShowPostDetail from '../components/Body/ShowPostDetail';
import ShowCommentLine from '../components/Comment/ShowCommentLine';
import { getPost } from '../actions/post';
import { getPostComments } from '../actions/comment';
import Icon from 'react-icons-kit';
import { pen } from 'react-icons-kit/icomoon';
import NotFound from '../components/NotFound';

// A container that gets the relevant post
// calls Header & sends the post to ShowPostDetail for display
// then lists the comments for the post
// or gives a 404 if the comment isn't found

/*
I'm not massively happy with the efficiency of this:
we're taking something that may already be in state in posts.items
and readding it as post.item, because if we don't then going straight to
http://localhost:3000/react/8xf0y6ziyjabvozdd253nd could be empty
*/

class Post extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPost(this.props.match.params.postid));
    dispatch(getPostComments(this.props.match.params.postid));
  }

  render() {
    const { post, comments } = this.props;
    return (
      <div>
        {post.id ? (
          <div>
            <ShowPostDetail post={post} />
            <div className="comments">
              <ul>
                {comments.map(comment => (
                  <li key={comment.id}>
                    <ShowCommentLine comment={comment} />
                  </li>
                ))}
                <li key="newcomment">
                  <Link
                    className="blacklink"
                    to={'/' + post.category + '/' + post.id + '/newcomment'}
                  >
                    <Icon icon={pen} /> Add new comment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <NotFound
            message={
              'a post with ID of ' +
              this.props.match.params.postid +
              " can't be found"
            }
          />
        )}
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired
};

// inspired by https://stackoverflow.com/questions/34840994/javascript-redux-how-to-get-an-element-from-store-by-id
const mapStateToProps = (state, ownProps) => ({
  post: state.posts.item || {},
  comments: state.comments.items || []
});

export default connect(mapStateToProps)(Post);
