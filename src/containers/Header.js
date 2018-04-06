import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowCats from '../components/Header/ShowCats';

let fun = [{ name: 'Rod' }, { name: 'Jane' }, { name: 'Freddy' }];

class Header extends Component {
  render() {
    return (
      <div>
        <ShowCats cats={fun} />
      </div>
    );
  }
}

function mapStateToProps(state, categories = []) {
  return {
    categories: state.categories.items.categories
  };
}

export default connect(mapStateToProps)(Header);
