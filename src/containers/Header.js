import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ShowCats from '../components/Header/ShowCats';
//import { fetchCategories } from '../actions/category';

class Header extends Component {
  render() {
    return (
      <div>
        <ShowCats cats={this.props.categories} />
      </div>
    );
  }
}

Header.proptypes = {
  categories: PropTypes.array.isReqired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    categories: state.categories.items.categories || []
  };
}

export default connect(mapStateToProps)(Header);
