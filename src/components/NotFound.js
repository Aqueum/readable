import React, { Component } from 'react';
import PropTypes from 'prop-types';

// A generic 404 not found page

class NotFound extends Component {
  render() {
    return (
      <div className="main pad">
        <h1>404: Page Not Found</h1>
        {!this.props.message ? (
          <p> come here often? </p>
        ) : (
          <p> {this.props.message} </p>
        )}
        <a href="http://www.aqueum.com/contact/">
          let us know there's a problem
        </a>
      </div>
    );
  }
}

Comment.propTypes = {
  message: PropTypes.string
};

export default NotFound;
