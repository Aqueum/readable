import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import List from '../containers/List';
import NotFound from './NotFound';
import ViewPost from './ViewPost';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/post/:postid" component={ViewPost} />
          <Route exact path="/list" render={() => <List categories="" />} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
