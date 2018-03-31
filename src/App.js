import React, { Component } from 'react';
import './App.css';
import * as ReadAPI from './ReadAPI';

class App extends Component {
  state = {
    //categories: [],
    //posts: []
    //post: []
    comments: []
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
    /*
    ReadAPI.getPosts().then(posts => {
      this.setState({ posts });
    });
    */
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
    ReadAPI.getPost('8xf0y6ziyjabvozdd253nd').then(post => {
      this.setState({ post });
    });
    */
    /*
    ReadAPI.votePost('8xf0y6ziyjabvozdd253nd', 'upVote').then(post => {
      this.setState({ post });
    });
    */
    /*
    ReadAPI.editPost(
      '8xf0y6ziyjabvozdd253nd',
      'New Title',
      'Body body body'
    ).then(post => {
      this.setState({ post });
    });
    */
    /*
    ReadAPI.delPost('8xf0y6ziyjabvozdd253nd').then(post => {
      this.setState({ post });
    });
    */
    /*
    ReadAPI.getPostComments('8xf0y6ziyjabvozdd253nd').then(comments => {
      this.setState({ comments });
    });
    */
    /*
    ReadAPI.addComment(
      'TestComment001',
      1467166873934,
      'I think this is a comment',
      'commentor',
      '8xf0y6ziyjabvozdd253nd'
    ).then(comments => {
      this.setState({ comments });
    });
    */
    /*
    ReadAPI.getComment('8tu4bsun805n8un48ve89').then(comments => {
      this.setState({ comments });
    });
    */
    /*
    ReadAPI.voteComment('8tu4bsun805n8un48ve89', 'upVote').then(comments => {
      this.setState({ comments });
    });
    */
    /*
    ReadAPI.editComment(
      '8tu4bsun805n8un48ve89',
      1467166874934,
      'edited comment'
    ).then(comments => {
      this.setState({ comments });
    });
    */
    /*
    ReadAPI.delComment('8tu4bsun805n8un48ve89').then(comments => {
      this.setState({ comments });
    });
    */
  }

  render() {
    //console.log(this.state.post);
    //console.log(this.state.categories);
    //console.log(this.state.posts);
    //console.log(this.state.comments);
    return (
      <div>
        <h1>Placeholder</h1>
      </div>
    );
  }
}

export default App;
