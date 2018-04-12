import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ListPosts from './ListPosts';

class FrontPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListPosts category={this.props.match.params.category || ''} />
      </div>
    );
  }
}

FrontPage.proptypes = {
  category: PropTypes.string.isReqired,
  match: PropTypes.array.isRequired
};

export default FrontPage;
