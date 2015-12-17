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
	  		let listItemProps = {
	  			key: topic.id,
	  			onClick: this.handleListItemClick.bind(this, index)
	  		}	
	  		return <li {...listItemProps}>{topic.label}</li>
	  	});
	    
	  	let metaDataProps = {
	  		topic: topics[selectedTopic]
	  	};

	    return (
	    	<div>
	    		<ul className="commentBox">
	        		{topicsNodes}
	      		</ul>
	      		<MetaData {...metaDataProps}/>
	      	</div>
	    );
  	}
});

export default TagCloud;