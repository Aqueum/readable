import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return (
      <div className="main">
        <h1>404: Page Not Found</h1>
        <p> come here often? </p>
        <a href="http://www.aqueum.com/contact/">
          let us know there's a problem
        </a>
      </div>
    );
  }
}

export default NotFound;
