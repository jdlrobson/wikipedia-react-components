import React from 'react';

import Overlay from './../Overlay';

import './styles.less';

const Toast = ( props ) => {
	return (
		<Overlay className="mw-notification">
			<div className="content">
				{props.children}
			</div>
		</Overlay>
	);
};

export default Toast;
