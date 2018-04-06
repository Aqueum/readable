import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <div>
        Erm, text
        {console.log(this.props.categories)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.items.categories
});

export default connect(mapStateToProps)(Header);
