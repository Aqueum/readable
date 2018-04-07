import React, { Component } from 'react';
import Header from '../containers/Header';
import List from '../containers/List';

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
