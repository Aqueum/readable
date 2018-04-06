import React, { Component } from 'react';
import { connect } from 'react-redux';

let fun = [{ name: 'rod' }, { name: 'jane' }, { name: 'freddy' }];

class Header extends Component {
  render() {
    return (
      <div>
        Erm, text
        {fun.map(cat => <span key={cat.name}> {cat.name} </span>)}
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
