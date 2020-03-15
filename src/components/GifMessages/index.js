import GifMessages from './GifMessages';
import { connect } from 'react-redux';

import { searchGifs, searchRandomGifs } from '../../store/reducers/common';

const mapStateToProps = state => ({
  gifs: state.common.gifs,
  isSearchingGifs: state.common.isSearchingGifs,
});

const mapDispatchToProps = {
  searchGifs,
  searchRandomGifs,
}

export default connect(mapStateToProps,  mapDispatchToProps)(GifMessages);