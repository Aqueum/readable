import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPost, editPost } from '../actions/post';

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
  }

  render() {
    console.log(this.props);
    return (
      // inspired by: https://reactjs.org/docs/forms.html
      <form>
        <label>
          Title:
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          Body:
          <input
            name="body"
            type="text"
            value={this.state.body}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
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
