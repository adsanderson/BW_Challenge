'use strict';

import test from 'tape';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import MetaData from '../src/components/MetaData';

test('mapTopicsJsonToState: expect the the topics to not be in the same order', function (t) {

	let sd = ReactTestUtils.createRenderer();

	sd.render(
	  <MetaData />
	);

	let shallowMetaData = sd.getRenderOutput();

	console.log(shallowMetaData.props.children[0].props.children);

	t.deepEqual(shallowMetaData.props.children[0], (<h3>Information on topic "{undefined}"</h3>));

  t.end();
});