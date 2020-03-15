import GifPagination from './GifPagination';
import { connect } from 'react-redux';

import { searchGifs } from '../../../store/reducers/common';

const mapStateToProps = state => ({
  pagination: state.common.pagination,
  isSearchingGifs: state.common.isSearchingGifs,
});

export default connect(mapStateToProps, { searchGifs })(GifPagination);