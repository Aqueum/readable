import React, { Component } from 'react';

class ViewPost extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>ViewPost</h1>
        {this.props.match.params.postid}
      </div>
    );
  }
}

export default ViewPost;
