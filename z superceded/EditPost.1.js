import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPost, editPost } from '../actions/post';

/*
 * the big idea was to give local react state the current values from the redux store
 * let them deal with them and then finally dispatch the amended values on submit
 * the problem is I can't seem to get the store state in time to initialise local state
 */
class EditPost extends Component {
  state = {
    title: 'empty title',
    body: 'empty body'
  };

  componentDidMount() {
    this.props.dispatch(
      getPost(this.props.match.params.postid).then(
        console.log(this.props.post.title)
      )
    );
  }

  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    return (
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

/*
      .then(title => {
        this.setState(this.props.post.title).then(body => {
          this.setState(this.props.post.body);
        });
      });
*/

/*class EditPost extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getPost(this.props.match.params.postid));
  }

  render() {
    const { title, body } = this.props.post;

    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!title.value.trim()) {
              return;
            }
            this.props.dispatch(editPost(title.value, body.value));
          }}
        >
          <p>
            <label>
              Post Title <input value={title} />
            </label>
          </p>
          <p>
            <label>
              Post Body <textarea value={body} />
            </label>
          </p>
          <div>
            <input type="submit" value="Submit edits" />
          </div>
        </form>
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
*/
/*
          <p>
            Post Title <input name="title" ref={node => (title = node)} />
          </p>
          <p>
            Post Body <textarea ref={node => (body = node)} />
          </p>
*/