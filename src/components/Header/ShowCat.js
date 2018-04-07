import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ShowCats extends Component {
  render() {
    return (
      <div>
        {this.props.cat} <Link to="/">other categories</Link>
      </div>
    );
  }
}

ShowCats.propTypes = {
  cat: PropTypes.string.isRequired
};

/*

        {this.props.cats.map(cat => (
          <Link key={cat.name} to={cat.name}>
            {' '}
            {cat.name}{' '}
          </Link>
        ))}

*/
