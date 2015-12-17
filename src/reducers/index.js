'use strict';

import { REQUEST_TOPICS, RECEIVE_TOPICS, SELECT_TOPIC } from '../actions'
import { combineReducers } from 'redux';
// import tagCloud from './tag-cloud';

let initialState = {
  selectedTopic: -1,
  topics: []
};

function topics(state = initialState, action) {
	console.log('TEST');

	switch (action.type) {    
    case SELECT_TOPIC:
      return Object.assign({}, state, {
        selectedTopic: action.index
      });
    default:
      return state
  }

};


const rootReducer = combineReducers({
  topics
});

export default rootReducer;