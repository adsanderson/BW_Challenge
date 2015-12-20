'use strict';

import React from 'react';

let MetaData = React.createClass({
  	render() {
	  	let topic = this.props.topic || {};

	    return (
	    	<div className="bw-meta-container">
	        	<h3>Information on topic "{topic.label}"</h3>
	        	<ul className="bw-meta-list">
	        		<li className="bw-meta-total">Total mentions: {topic.volume || 0}</li>
	        		<li>Positive mentions: <span className="bw-positive">{topic.sentimentPositive || 0}</span></li>
	        		<li>Neutral mentions: <span>{topic.sentimentNeutral || 0}</span></li>
	        		<li>Negative mentions: <span className="bw-negative">{topic.sentimentNegative || 0}</span></li>
	        	</ul>
	      	</div>
	    );
  	}
});

export default MetaData;