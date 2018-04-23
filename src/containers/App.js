import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import NewPost from './NewPost';
import NewComment from './NewComment';
//import ListRoute from './ListRoute';
import NotFound from '../components/NotFound';
import Post from './Post';
import EditPost from './EditPost';
import Comment from './Comment';
import EditComment from './EditComment';

class App extends Component {
  render() {
    return (
      <div>
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

/*
<Route exact path="/list" render={() => <List categories="" />} />
*/
export default App;
