'use strict';

var test = require('tape');
var reduceToMinAndMaxValue = require('./reduceToMinAndMaxValue');

test('expect an empty string to be returned for neutral values', function (t) {
    t.plan(2);

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
    	}
    ];

    let result = simpleArrayOfVolumes.reduce(reduceToMinAndMaxValue, {min:0, max:0});
    t.equal(result.min, min);
	t.equal(result.max, max);
});
