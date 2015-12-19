import React from 'react';

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
	  			className: topic.className + activeTopic
	  		}	
	  		return <li {...listItemProps}>{topic.label}</li>
	  	});
	    
	  	let metaDataProps = {
	  		topic: topics[selectedTopic]
	  	};

	  	let meta = (selectedTopic === -1) ? null : <MetaData {...metaDataProps}/>

	    return (
	    	<div>
	    		<ul className="bw-tag">
	        		{topicsNodes}
	      		</ul>
	      		{meta}
	      	</div>
	    );
  	}
});

export default TagCloud;