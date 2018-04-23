import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addComment } from '../actions/comment';

class NewComment extends Component {
  render() {
    let body, author;
    let parentId = this.props.match.params.postid;

    return (
      <div>
        <p>New comment on post {parentId}</p>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!body.value.trim()) {
              console.log('No body detected, so no comment added');
              return;
            }
            this.props.dispatch(addComment(body.value, author.value, parentId));
            this.props.history.push('/');
          }}
        >
          <p>
            Comment Author <input name="author" ref={node => (author = node)} />
          </p>
          <p>
            Comment Body <textarea ref={node => (body = node)} />
          </p>
          <div>
            <button className="button" type="submit">
              Add Comment
            </button>
          </div>
        </form>
      </div>
    );
  }
}

NewComment.propTypes = {
  match: PropTypes.object.isRequired
};

export default connect()(NewComment);
