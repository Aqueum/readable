import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReadAPI from './ReadAPI';

class App extends Component {
  state = {
    //categories: [],
    //posts: []
    post: []
  };

  componentDidMount() {
    /*ReadAPI.getCats().then(categories => {
      this.setState({ categories });
    });*/

    /*ReadAPI.getPosts().then(posts => {
      this.setState({ posts });
    });*/

    ReadAPI.get('8xf0y6ziyjabvozdd253nd').then(post => {
      this.setState({ post });
    });
  }

  render() {
    //console.log(this.state.categories);
    //console.log(this.state.posts);
    console.log(this.state.post);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
