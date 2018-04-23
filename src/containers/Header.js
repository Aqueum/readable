import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { fetchCategories } from '../actions/category';
import { selectCategory } from '../actions/select';

/*
I'm not massively happy with the efficiency of this:
we're fetching the same categories every time this page is refreshed
*/

/*
Also consider moving to Redirect - declarative navigation: https://tylermcginnis.com/react-router-programmatically-navigate/
*/

class Header extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  render() {
    const { dispatch, categories, selectCat } = this.props;
    return (
      <div className="navbar">
        <span className="logo">readAble: </span>
        <div>
          {categories.map(
            cat =>
              cat.name === selectCat ? (
                <div key={cat.name}>
                  <a className="selected">{cat.name}</a>{' '}
                </div>
              ) : (
                <div key={cat.name}>
                  <a
                    onClick={() => {
                      dispatch(selectCategory(cat.name));
                      this.props.history.push('/' + cat.name);
                    }}
                  >
                    {cat.name}
                  </a>{' '}
                </div>
              )
          )}
          {selectCat === '' ? (
            <a className="selected">Everything</a>
          ) : (
            <a
              onClick={() => {
                dispatch(selectCategory(''));
                this.props.history.push('/');
              }}
            >
              Everything
            </a>
          )}
        </div>
      </div>
    );
  }
}

Header.proptypes = {
  categories: PropTypes.array.isReqired,
  dispatch: PropTypes.func.isRequired,
  selectCat: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    categories: state.categories.items.categories || [],
    selectCat: state.selections.selectCat || []
  };
}

export default withRouter(connect(mapStateToProps)(Header));
