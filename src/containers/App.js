import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import ListRoute from './ListRoute';
import NotFound from '../components/NotFound';
import ViewPost from '../components/ViewPost';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/post/:postid" component={ViewPost} />
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
