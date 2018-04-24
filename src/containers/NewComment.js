import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addComment } from '../actions/comment';

// A form to write a new comment

class NewComment extends Component {
  render() {
    let body, author;
    let parentId = this.props.match.params.postid;

    return (
      <div>
        <div className="main">
          <form
            onSubmit={e => {
              e.preventDefault();
              if (!body.value.trim()) {
                console.log('No body detected, so no comment added');
                return;
              }
              this.props.dispatch(
                addComment(body.value, author.value, parentId)
              );
              this.props.history.push('/');
            }}
          >
            <p className="row">
              <label>Comment Author</label>{' '}
              <input name="author" ref={node => (author = node)} />
            </p>
            <p className="row">
              <label>Comment Body</label>{' '}
              <textarea ref={node => (body = node)} />
            </p>
            <p className="row">
              <label />
              <button className="button" type="submit">
                Add Comment
              </button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

NewComment.propTypes = {
  match: PropTypes.object.isRequired
};

export default connect()(NewComment);
