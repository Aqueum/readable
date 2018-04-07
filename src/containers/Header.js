import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ShowCats from '../components/Header/ShowCats';
import ShowCat from '../components/Header/ShowCat';
import { fetchCategories } from '../actions/category';

class Header extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  render() {
    const { show, categories, cat } = this.props;
    return (
      <div>
        {show === 'cats' ? (
          <ShowCats cats={categories} />
        ) : (
          <ShowCat cat={cat} />
        )}
      </div>
    );
  }
}

Header.proptypes = {
  categories: PropTypes.array.isReqired,
  dispatch: PropTypes.func.isRequired,
  show: PropTypes.string.isRequired,
  cat: PropTypes.string
};

function mapStateToProps(state) {
  return {
    categories: state.categories.items.categories || []
  };
}

export default connect(mapStateToProps)(Header);
