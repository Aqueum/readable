import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getComment, editComment } from '../actions/comment';

class EditComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getComment(this.props.match.params.commentid));
  }

  componentWillReceiveProps(nextProps) {
    // inspired by https://stackoverflow.com/questions/42498430/is-it-against-redux-philosophy-to-copy-redux-state-to-local-state
    if (nextProps.comment.id === this.props.match.params.commentid) {
      this.setState({ body: nextProps.comment.body });
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
      editComment(this.props.match.params.commentid, this.state.body)
    );
    event.preventDefault();
    this.props.history.push('/');
  }

  render() {
    return (
      // inspired by: https://reactjs.org/docs/forms.html
      <form>
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
        <input
          type="submit"
          value="Submit"
          className="button"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}

EditComment.propTypes = {
  comment: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  comment: state.comments.item || {}
});

export default connect(mapStateToProps)(EditComment);
