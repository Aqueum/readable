import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../actions/post';
import { fetchCategories } from '../actions/category';
import Header from '../containers/Header';

class NewPost extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  render() {
    let title, body, author, category;

    return (
      <div>
        <Header show="cat" cat={this.props.match.params.category} />
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
            <p className="row">
              <label>Post Title</label>
              <input name="title" ref={node => (title = node)} />
            </p>
            <p className="row">
              <label>Post Author </label>{' '}
              <input name="author" ref={node => (author = node)} />
            </p>
            <p className="row">
              <label>Post Body</label> <textarea ref={node => (body = node)} />
            </p>
            <p className="row">
              <label>Category: </label>
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
            </p>
            <p className="row">
              <label />
              <button type="submit">Add Post</button>
            </p>
          </form>
        </div>
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
