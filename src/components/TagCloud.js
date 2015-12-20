import React from 'react';
import ReactDOM from 'react-dom';

import MetaData from './MetaData';

var TagCloud = React.createClass({
	componentDidMount() {    	
    	this.props.fetchTopics();
  	},
  	handleListItemClick(index) {  		
  		this.props.selectTopic(index)
  	},
  	render() {	  	
	  	let { topics, selectedTopic } = this.props.topics;	  	
	  	let topicsNodes = topics.map((topic, index) => {  	
	  		let activeTopic = '';
	  		if (index === selectedTopic) {
	  			activeTopic = ' bw-tag-active';
	  		}
	  		let listItemProps = {
	  			key: topic.id,
	  			onClick: this.handleListItemClick.bind(this, index),
	  			className: 'bw-tag-topic ' + topic.className + activeTopic
	  		}	
	  		return <div {...listItemProps}>{topic.label}</div>
	  	});
	    
	  	let metaDataProps = {
	  		topic: topics[selectedTopic]
	  	};

	  	let meta = (selectedTopic === -1) ? null : <MetaData {...metaDataProps}/>

	    return (
	    	<div className="bw-container">
	    		<div className="bw-tag">
	        		{topicsNodes}
	      		</div>
     			{meta}
	      	</div>
	    );
  	}
});

export default TagCloud;