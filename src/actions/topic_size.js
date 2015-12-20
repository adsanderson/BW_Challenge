'use strict';

export default function topicSize (topicVolume, range) {

	  const numberOfSizes = 6;
	  const offsetMaxRange = 1;

	  const rangeSize = (range.max - range.min + offsetMaxRange) / numberOfSizes;

	  const className = 'bw-tag-size-';

	  let sizePosition = (topicVolume - range.min) / rangeSize;

	  return className + Math.floor(sizePosition);
}