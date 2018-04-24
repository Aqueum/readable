import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListPosts from './ListPosts';

// The front page lists all posts for the category it is given via its URL

class FrontPage extends Component {
  render() {
    return (
      <div>
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
