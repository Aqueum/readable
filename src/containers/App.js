import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import NewPost from './NewPost';
import ListRoute from './ListRoute';
import NotFound from '../components/NotFound';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route exact path="/newpost" component={NewPost} />
          <Route path="/:category/:postid" component={Post} />
          <Route path="/:category" component={ListRoute} />
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
