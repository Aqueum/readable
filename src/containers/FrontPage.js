import React, { Component } from 'react';
import Header from './Header';
import List from './List';

class FrontPage extends Component {
  render() {
    return (
      <div>
        <Header show="cats" />
        <List categories="" />
      </div>
    );
  }
}

export default FrontPage;
