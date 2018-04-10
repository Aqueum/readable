import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function sortposts(posts) {}

PostSorter.propTypes = {
  posts: PropTypes.array.isRequired
  //upVote: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    selections: state.selections || []
  };
}

export default connect(mapStateToProps)(sortposts);
