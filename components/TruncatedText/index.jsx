import React from 'react';
import './styles.less';

const TruncatedText = ( props ) => {
	return <span className='truncated-text' style={props.style}>{props.children}</span>;
};

export default TruncatedText;
