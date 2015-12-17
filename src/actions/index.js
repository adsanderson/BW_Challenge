import fetch from 'isomorphic-fetch'

export const REQUEST_TOPICS = 'REQUEST_TOPICS';
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
export const SELECT_TOPIC = 'SELECT_TOPIC';

export function selectTopic (index) {
	return {
		type: SELECT_TOPIC,
		index
	};
}

window.xselectTopic = selectTopic;

// export function requestTopics (topics) {
// 	return {
// 		type: REQUEST_TOPICS
// 	}
// }

// export function fetchTopics(topics) {
//   return (dispatch) => {
//     dispatch(requestTopics(topics))
//     return fetch('topics.json')
//       .then((response) => response.json())
//       .then((json) => dispatch(receiveTopics(topics, json)))
//   }
// }

// export function receiveTopics (topics, json) {
// 	return {
// 		type: RECEIVE_TOPICS,
// 		topics: json.data.children.map(child => child.data)
// 	}
// }