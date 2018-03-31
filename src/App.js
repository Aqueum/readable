import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as ReadAPI from './ReadAPI';

class App extends Component {
  state = {
    //categories: [],
    posts: []
    //post: []
    //comments: []
  };

  componentDidMount() {
    /*
    ReadAPI.getCats().then(categories => {
      this.setState({ categories });
    });
    */

    /*
    ReadAPI.getCatPosts('redux').then(posts => {
      this.setState({ posts });
    });
    */

    ReadAPI.getPosts().then(posts => {
      this.setState({ posts });
    });

    /*
    ReadAPI.addPost(
      'testID01',
      1467166872934,
      'Udacity self help',
      'We pay and we do',
      'Writer',
      'udacity'
    ).then(posts => {
      this.setState({ posts });
    });
    */

    /*
    ReadAPI.get('8xf0y6ziyjabvozdd253nd').then(post => {
      this.setState({ post });
    });
    */

    /*
    ReadAPI.votePost('8xf0y6ziyjabvozdd253nd', 'upVote').then(post => {
      this.setState({ post });
    });
    */

    /*
    ReadAPI.delPost('8xf0y6ziyjabvozdd253nd').then(post => {
      this.setState({ post });
    });
    */

    /*
    ReadAPI.postComments('8xf0y6ziyjabvozdd253nd').then(comments => {
      this.setState({ comments });
    });
    */

    /*
    ReadAPI.getComment('8tu4bsun805n8un48ve89').then(comments => {
      this.setState({ comments });
    });
    */
  }

  render() {
    //console.log(this.state.post);
    //console.log(this.state.categories);
    console.log(this.state.posts);
    //console.log(this.state.comments);
    //
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
