import React, { Component } from 'react';
import Header from '../containers/Header';
import List from '../containers/List';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
