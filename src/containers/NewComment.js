import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/post';

class NewPost extends Component {
  render() {
    let title, body, author, category;

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!title.value.trim()) {
              return;
            }
            this.props.dispatch(
              addPost(title.value, body.value, author.value, category.value)
            );
            this.props.history.push('/');
          }}
        >
          <p>
            Post Title <input name="title" ref={node => (title = node)} />
          </p>
          <p>
            Post Author <input name="author" ref={node => (author = node)} />
          </p>
          <p>
            Post Body <textarea ref={node => (body = node)} />
          </p>
          <label>
            Category:
            <select defaultValue="udacity" ref={node => (category = node)}>
              <option value="react">react</option>
              <option value="redux">redux</option>
              <option value="udacity">udacity</option>
            </select>
          </label>
          <div>
            <button className="button" type="submit">
              Add Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(NewPost);

/*const NewPost = ({ dispatch }) => {
  let id, timestamp, title, body, author, category; // was input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!title.value.trim()) {
            return;
          }
          dispatch(
            addPost(
              id.value,
              timestamp.value,
              title.value,
              body.value,
              author.value,
              category.value
            )
          );
          //input.value = '';
          id.value = '';
          timestamp.value = '';
          title.value = '';
          body.value = '';
          author.value = '';
          category.value = '';
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default connect()(NewPost);*/

/*
addPost(id, timestamp, title, body, author, category)
*/
