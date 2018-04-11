import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/post';

const NewPost = ({ dispatch }) => {
  let id, title, body, author;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!title.value.trim()) {
            return;
          }
          dispatch(
            addPost(id.value, title.value, body.value, author.value, 'udacity')
          );
        }}
      >
        <p>
          Post ID <input name="id" ref={node => (id = node)} />
        </p>
        <p>
          Post Title <input name="title" ref={node => (title = node)} />
        </p>
        <p>
          Post Author <input name="author" ref={node => (author = node)} />
        </p>
        <p>
          Post Body <textarea ref={node => (body = node)} />
        </p>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

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
