import React, { Component } from 'react';
import Header from '../containers/Header';
import Body from '../containers/Body';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
