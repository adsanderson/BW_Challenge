import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TagCloud from '../components/TagCloud'
import * as topicActions from '../actions';

function mapStateToProps(state) {
  return {
    // counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(topicActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TagCloud);