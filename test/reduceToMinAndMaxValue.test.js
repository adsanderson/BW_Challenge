'use strict';

import test from 'tape';
import reduceToMinAndMaxValue from '../src/actions/reduceToMinAndMaxValue';

test('reduceToMinAndMaxValue: expect the reduce function to find the min and max volumes from an array', function (t) {

    let min = 9;
    let max = 45;

    let simpleArrayOfVolumes = [{
		volume: 9
	}, {
		volume: 19
	}, {
		volume: 36
	}, {
		volume: 45
	}, {
		volume: 27
	}];

    let result = simpleArrayOfVolumes.reduce(reduceToMinAndMaxValue, {min: min, max: max});
    t.equal(result.min, min);
    t.equal(result.max, max);
    t.end();
});
