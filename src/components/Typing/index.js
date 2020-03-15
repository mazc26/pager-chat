import Typing from './Typing';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  username: state.common.username,
});

export default connect(mapStateToProps, {})(Typing);