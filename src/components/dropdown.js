import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
