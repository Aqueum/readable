import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import List from '../containers/List';
import NotFound from './NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <FrontPage />} />
          <Route exact path="/list" render={() => <List />} />
          <Route exact path="*" render={() => <NotFound />} />
        </Switch>
      </div>
    );
  }
}

export default App;
