import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../actions/post';
import { fetchCategories } from '../actions/category';

class NewPost extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  render() {
    let title, body, author, category;

    return (
      <div className="main">
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
            <select
              defaultValue={this.props.match.params.category}
              ref={node => (category = node)}
            >
              {this.props.categories.map(option => (
                <option value={option.name} key={option.name}>
                  {option.name}
                </option>
              ))}
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

NewPost.propTypes = {
  match: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    categories: state.categories.items.categories || []
  };
}

export default connect(mapStateToProps)(NewPost);

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
