import GifPagination from './GifPagination';
import { connect } from 'react-redux';

import { searchGifs, searchRandomGifs } from '../../../store/reducers/common';

const mapStateToProps = state => ({
  gifs: state.common.gifs,
  pagination: state.common.pagination,
  isRandom: state.common.isRandom,
  isSearchingGifs: state.common.isSearchingGifs,
});

const mapDispatchToProps = {
  searchGifs,
  searchRandomGifs,
}

export default connect(mapStateToProps, mapDispatchToProps)(GifPagination);