import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { fetchCategories } from '../actions/category';
import { selectCategory } from '../actions/select';
import { selectSort } from '../actions/select';
import Dropdown from '../components/dropdown';

/*
I'm not massively happy with the efficiency of this:
we're fetching the same categories every time this page is refreshed
*/

/*
Also consider moving to Redirect - declarative navigation: https://tylermcginnis.com/react-router-programmatically-navigate/
*/

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  handleChange(nextSort) {
    this.props.dispatch(selectSort(nextSort));
  }

  render() {
    const { dispatch, categories, selectCat, selectSort } = this.props;
    return (
      <div className="navbar">
        <span className="logo">readAble:</span>
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
        <div className="sorter">
          Sort posts by
          <Dropdown
            options={['score', 'recency']}
            selected={selectSort}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

Header.proptypes = {
  categories: PropTypes.array.isReqired,
  dispatch: PropTypes.func.isRequired,
  selectCat: PropTypes.string.isRequired,
  selectSort: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    categories: state.categories.items.categories || [],
    selectCat: state.selections.selectCat || [],
    selectSort: state.selections.selectSort
  };
}

export default withRouter(connect(mapStateToProps)(Header));
