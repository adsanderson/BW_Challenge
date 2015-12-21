'use strict';

import test from 'tape';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import MetaData from '../src/components/MetaData';

test('mapTopicsJsonToState: expect no label when there is no topics in props', function (t) {

	let sd = ReactTestUtils.createRenderer();

	sd.render(
	  <MetaData />
	);

	let shallowMetaData = sd.getRenderOutput();

	console.log(shallowMetaData.props.children[0].props.children);

	t.deepEqual(shallowMetaData.props.children[0], (<h3>Information on topic "{undefined}"</h3>));

	let metaList = shallowMetaData.props.children[1].props.children;

	t.equal(metaList[0].props.children.join(''), ('Total mentions: 0'));

  t.end();
});

test('mapTopicsJsonToState: expect no label when there is no topics in props', function (t) {

	let sd = ReactTestUtils.createRenderer();

	let metaDataProps = {
		topic: {
			label: 'Test Label',
			volume: 6
		}
	};

	sd.render(
	  <MetaData {...metaDataProps}/>
	);

	let shallowMetaData = sd.getRenderOutput();

	console.log(shallowMetaData.props.children[0].props.children);

	t.deepEqual(shallowMetaData.props.children[0], (<h3>Information on topic "{'Test Label'}"</h3>));

	let metaList = shallowMetaData.props.children[1].props.children;

	t.equal(metaList[0].props.children.join(''), ('Total mentions: 6'));

  t.end();
});