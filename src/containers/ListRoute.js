import React, { Component } from 'react';
import ListPosts from './ListPosts';
import Header from './Header';

class ViewPost extends Component {
  render() {
    const { category } = this.props.match.params;
    return (
      <div>
        <Header show="cat" cat={category} />
        <ListPosts categories={category} />
      </div>
    );
  }
}

export default ViewPost;
