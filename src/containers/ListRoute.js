import React, { Component } from 'react';
import List from './List';
import Header from './Header';

class ViewPost extends Component {
  render() {
    const { category } = this.props.match.params;
    return (
      <div>
        <Header show="cat" cat={category} />
        <List categories={category} />
      </div>
    );
  }
}

export default ViewPost;
