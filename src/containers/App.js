import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TagCloud from '../components/TagCloud';
import * as topicActions from '../actions';

function mapStateToProps(state) {	
  	return {
    	selectedTopic: state.selectedTopic,
		topics: state.topics
  	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(topicActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TagCloud);
