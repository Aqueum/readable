import React, { Component } from 'react';
import List from './List';

class ViewPost extends Component {
  render() {
    const { category } = this.props.match.params;
    return (
      <div>
        <List categories={category} />
      </div>
    );
  }
}

export default ViewPost;
