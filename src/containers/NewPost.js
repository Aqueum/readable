import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/post';
import Dropdown from '../components/dropdown';

const NewPost = ({ dispatch }) => {
  let title, body, author;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!title.value.trim()) {
            return;
          }
          dispatch(addPost(title.value, body.value, author.value, 'udacity'));
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
        Category:
        <Dropdown
          options={['redux', 'react', 'udacity']}
          selected={'udacity'}
          onChange={console.log('change')}
        />
        <div>
          <button type="submit">Add Post</button>
        </div>
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
