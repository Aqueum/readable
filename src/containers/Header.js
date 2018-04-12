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
      <div>
        <div>
          <span>Posts about: </span>
          {categories.map(
            cat =>
              cat.name === selectCat ? (
                <span key={cat.name}>
                  <button className="selected">{cat.name}</button>{' '}
                </span>
              ) : (
                <span key={cat.name}>
                  <button
                    className="button"
                    onClick={() => {
                      dispatch(selectCategory(cat.name));
                      this.props.history.push('/' + cat.name);
                    }}
                  >
                    {cat.name}
                  </button>{' '}
                </span>
              )
          )}
          {selectCat === '' ? (
            <button className="selected">Everything</button>
          ) : (
            <button
              className="button"
              onClick={() => {
                dispatch(selectCategory(''));
                this.props.history.push('/');
              }}
            >
              Everything
            </button>
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
