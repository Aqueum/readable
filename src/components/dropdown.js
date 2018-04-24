import React, { Component } from 'react';
import PropTypes from 'prop-types';

// A presentational component that displays a dropdown list when given:
// look = the class of the list (specifically sorterSelect makes it match the header)
// options = the items to chose from
// selected = the initially selected option
// onChange = a function that defines what to do when a new item is selected

class Dropdown extends Component {
  render() {
    const { options, selected, onChange, look } = this.props;

    return (
      <span>
        <select
          className={look}
          onChange={e => onChange(e.target.value)}
          value={selected}
        >
          {options.map(option => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </span>
    );
  }
}

Dropdown.propTypes = {
  look: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Dropdown;
