export default function reduceToMinAndMaxValue (range, topic) {
	
	  if (range.max < topic.volume) {
		  range.max = topic.volume;
	}

	  if (range.min > topic.volume) {
		  range.min = topic.volume;
	}

	  return range;
}