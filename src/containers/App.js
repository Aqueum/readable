import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import FrontPage from './FrontPage';
import NewPost from './NewPost';
import NewComment from './NewComment';
import NotFound from '../components/NotFound';
import Post from './Post';
import EditPost from './EditPost';
import Comment from './Comment';
import EditComment from './EditComment';

// The main App page simply calls the header then
// switches between all available pages based on the URL
// using React Router DOM

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/comment/:commentid/edit" component={EditComment} />
          <Route path="/comment/:commentid" component={Comment} />
          <Route path="/:category/newpost" component={NewPost} />
          <Route path="/:category/:postid/newcomment" component={NewComment} />
          <Route path="/:category/:postid/edit" component={EditPost} />
          <Route path="/:category/:postid" component={Post} />
          <Route path="/:category" component={FrontPage} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
