'use strict';

import reduceToMinAndMaxValue from './reduceToMinAndMaxValue';
import setSentimentClass from './sentiment';

export default function mapTopicsJsonToState (topics) {
	let initialRangeValue = topics[0].volume;
	let range = topics.reduce(reduceToMinAndMaxValue, {min:initialRangeValue, max:initialRangeValue});
	let mapToState = createMapToState(range);
	return topics.map(mapToState);
}

function createMapToState (range) {
	return function (topic) {		
		return {
			id: topic.id,
			label: topic.label,
			volume: topic.volume,
			sentimentPositive: topic.sentiment.positive,
			sentimentNeutral: topic.sentiment.neutral,
			sentimentNegative: topic.sentiment.negative,
			sentimentScore: topic.sentimentScore,
			sentimentClass: setSentimentClass(topic.sentimentScore)
		};		
	}
}

