import React, { Component } from 'react';
import Header from './Header';
import ListPosts from './ListPosts';

class FrontPage extends Component {
  render() {
    return (
      <div>
        <Header show="cats" />
        <ListPosts categories="" />
      </div>
    );
  }
}

export default FrontPage;
