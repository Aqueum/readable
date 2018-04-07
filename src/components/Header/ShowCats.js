import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ShowCats extends Component {
  render() {
    return (
      <div>
        {this.props.cats.map(cat => (
          <Link key={cat.name} to={cat.name}>
            {' '}
            {cat.name}{' '}
          </Link>
        ))}
      </div>
    );
  }
}

ShowCats.propTypes = {
  cats: PropTypes.array.isRequired
  //cats: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

/*
 {console.log('Props', this.props)};
        {this.state.categories !== null ? (
          this.state.categories.map(cat => (
            <span key={cat.name}> {cat.name} </span>
          ))
        ) : (
          <span>No</span>
        )}
*/
