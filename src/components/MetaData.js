'use strict';

import React from 'react';

let MetaData = React.createClass({	
  	render() {	  	
	  	let topic = this.props.topic || {};
	  		    
	    return (
	    	<div className="bw-meta-container">
	        	<h3>Information on topic "{topic.label}"</h3>
	        	<ul>
	        		<li>Total mentions: {topic.volume || 0}</li>
	        		<li>Positive mentions: {topic.sentimentPositive || 0}</li>
	        		<li>Neutral mentions: {topic.sentimentNeutral || 0}</li>
	        		<li>Negative mentions: {topic.sentimentNegative || 0}</li>
	        	</ul>
	      	</div>
	    );
  	}
});

export default MetaData;