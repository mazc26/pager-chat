import Chat from './Chat';
import { connect } from 'react-redux';

import { setMessages } from '../../store/reducers/common';

const mapStateToProps = state => ({
  username: state.common.username,
})

export default connect(mapStateToProps, { setMessages })(Chat);