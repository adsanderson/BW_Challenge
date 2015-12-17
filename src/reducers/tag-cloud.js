// 'use strict';

// import { REQUEST_TOPICS, RECEIVE_TOPICS, SELECT_TOPIC } from '../actions'

// let initialState = {
//   selectedTopic: -1,
//   topics: []
// };

// export function selectTopic(state = initialState, action) {
// 	return state;
// };

// export function topics(state = initialState, action) {
//   switch (action.type) {
//     case RECEIVE_TOPICS:
//     	return Object.assign({}, state, {
//         selectedTopic: -1,
//         topics: action.topics
//       });   
//     default:
//       return state
//   }
// }

// export default function counter(state = 0, action) {
//   switch (action.type) {
//     case INCREMENT_COUNTER:
//       return state + 1
//     case DECREMENT_COUNTER:
//       return state - 1
//     default:
//       return state
//   }
// }