import topicSize from '../src/actions/topic_size';
import test from 'tape';

test('expect the result to contain the index size of the element', function (t) {
    t.plan(5);

    let range = {
    	min: 9,
    	max: 45
    }


    let topicSizeString = topicSize(33, range);
    t.notEqual(topicSizeString.indexOf('4'), -1);
    t.notEqual(topicSize(44, range).indexOf('5'), -1);
    t.notEqual(topicSize(45, range).indexOf('5'), -1);
    t.notEqual(topicSize(10, range).indexOf('0'), -1);
    t.notEqual(topicSize(9, range).indexOf('0'), -1);
});
