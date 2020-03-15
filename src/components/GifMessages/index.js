import GifMessages from './GifMessages';
import { connect } from 'react-redux';

import { searchGifs } from '../../store/reducers/common';

const mapStateToProps = state => ({
  gifs: state.common.gifs,
  isSearchingGifs: state.common.isSearchingGifs,
});

export default connect(mapStateToProps, { searchGifs })(GifMessages);