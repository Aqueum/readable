import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function sortposts(posts) {
  const { sortBy } = this.props;
  const sortedPosts = [] // inspired by https://stackoverflow.com/questions/43572436/sort-an-array-of-objects-in-react-and-render-them/43572944
    .concat(this.props.posts)
    .sort((a, b) => a[sortBy] < b[sortBy]);
  return sortedPosts;
}

export function alsosortposts(posts) {
  const sortedPosts = [] // inspired by https://stackoverflow.com/questions/43572436/sort-an-array-of-objects-in-react-and-render-them/43572944
    .concat(this.props.posts)
    .sort((a, b) => a['voteScore'] < b['voteScore']);
  return sortedPosts;
}

sortposts.propTypes = {
  posts: PropTypes.array.isRequired,
  sortBy: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    sortBy: state.selections.selectSort
  };
}

export default connect(mapStateToProps)(sortposts);
