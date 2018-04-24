import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPost, editPost } from '../actions/post';

// A form, populated with the current post
// that allows any user to edit the post

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getPost(this.props.match.params.postid));
  }

  componentWillReceiveProps(nextProps) {
    // inspired by https://stackoverflow.com/questions/42498430/is-it-against-redux-philosophy-to-copy-redux-state-to-local-state
    if (nextProps.post.id === this.props.match.params.postid) {
      this.setState({ title: nextProps.post.title, body: nextProps.post.body });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    this.props.dispatch(
      editPost(
        this.props.match.params.postid,
        this.state.title,
        this.state.body
      )
    );
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    // inspired by: https://reactjs.org/docs/forms.html
    return (
      <div>
        <div className="main">
          <form>
            <p className="row">
              <label>Title:</label>
              <input
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </p>
            <p className="row">
              <label>Body:</label>
              <input
                name="body"
                type="text"
                value={this.state.body}
                onChange={this.handleInputChange}
              />
            </p>
            <label />
            <input
              type="submit"
              value="Submit"
              className="button"
              onClick={this.handleSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

EditPost.propTypes = {
  post: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  post: state.posts.item || {}
});

export default connect(mapStateToProps)(EditPost);
