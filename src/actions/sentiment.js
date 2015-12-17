'use strict';

export default function setSentimentClass (sentiment) {
	if (typeof sentiment === 'number') {
		const positiveSentiment = 60;
		const negativeSentiment = 40;
		if (sentiment >= positiveSentiment) {
			return 'bw-tag-positive';
		}
		if (sentiment <= negativeSentiment) {
			return 'bw-tag-negative';
		}		
	}
	return '';
};