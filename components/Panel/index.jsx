import React from 'react';

import './styles.less';

export default ( props ) => {
	var className = 'panel';
	if ( props.isHeading ) {
		className += ' panel-heading';
	}
	if ( props.className ) {
		className += props.className;
	}
	return <div className={className}>{props.children}</div>;
};
