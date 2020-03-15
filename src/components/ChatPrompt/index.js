import ChatPrompt from './ChatPrompt';
import { connect } from 'react-redux';

import { setUsername } from '../../store/reducers/common';

const mapStateToProps = state => ({
  username: state.common.username
});

export default connect(mapStateToProps, { setUsername })(ChatPrompt);