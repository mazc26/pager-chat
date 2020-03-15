import ChatMessages from './ChatMessages';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  socket: state.common.socket,
  messages: state.common.messages,
});

export default connect(mapStateToProps, {})(ChatMessages);