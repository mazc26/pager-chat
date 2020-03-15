import Chat from './Chat';
import { connect } from 'react-redux';

import { setMessages, setIsFetching } from '../../store/reducers/common';

const mapStateToProps = state => ({
  username: state.common.username,
})

const mapDispatchToProps = {
  setMessages,
  setIsFetching,
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);