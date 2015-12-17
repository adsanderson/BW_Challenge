'use strict';

let sentiment = require('./sentiment');
let test = require('tape');

test('expect an empty string to be returned for neutral values', function (t) {
    t.plan(1);

    let neutralString = '';

    let neutral = sentiment(50);
    t.equal(neutral, neutralString);
});

test('expect the positive class string to be returned for positive values', function (t) {
    t.plan(3);

    let positiveClassString = 'bw-tag-positive';

    let positives = [
    	sentiment(60),
    	sentiment(61),
    	sentiment(100)
    ];
    t.equal(positives[0], positiveClassString);
    t.equal(positives[1], positiveClassString);
    t.equal(positives[2], positiveClassString);
});

test('expect the negative class string to be returned for negative values', function (t) {
    t.plan(3);

    let negativeClassString = 'bw-tag-negative';

    let negatives = [
    	sentiment(40),
    	sentiment(39),
    	sentiment(0)
    ];
    t.equal(negatives[0], negativeClassString);
    t.equal(negatives[1], negativeClassString);
    t.equal(negatives[2], negativeClassString);
});

test('expect the unexpected values to return a string', function (t) {

	t.plan(4);

	let neutralString = '';

	let unexpected = [
    	sentiment(''),
    	sentiment(function() { return 10; }),
    	sentiment('10'),
    	sentiment(NaN)
    ];

    t.equal(unexpected[0], neutralString);
    t.equal(unexpected[1], neutralString);
    t.equal(unexpected[2], neutralString);
    t.equal(unexpected[3], neutralString);

});
