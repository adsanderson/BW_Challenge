import fetch from 'isomorphic-fetch';
import mapTopicsJsonToState from './mapTopicsJsonToState';

export const REQUEST_TOPICS = 'REQUEST_TOPICS';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const SELECT_TOPIC = 'SELECT_TOPIC';

export function selectTopic (index) {
	  return {
		  type: SELECT_TOPIC,
		  index
	};
}

export function requestTopics () {
	  return {
		  type: REQUEST_TOPICS
	};
}

export function fetchTopics() {
  return (dispatch) => {
    dispatch(requestTopics());
    return fetch('topics.json')
      .then((response) => response.json())
      .then((json) => dispatch(receiveTopics(json)));
  };
}

export function receiveTopics (json) {
	  return {
		  type: RECEIVE_TOPICS,
		  topics: mapTopicsJsonToState(json.topics)
	};
}