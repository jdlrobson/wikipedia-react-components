import React from 'react';

import './mediawiki-ui-input.css';

const Input = ( props ) => {
	var inputProps,
		suffix = props.className ? ' ' + props.className : '';

	inputProps = Object.assign( {}, props, {
		className: 'mw-ui-input' + suffix,
		placeholder: props.placeholder,
		onInput: props.onInput,
		disabled: props.disabled,
		defaultValue: props.defaultValue
	} );

	if ( props.textarea ) {
		return <textarea {...inputProps} />;
	} else {
		return <input {...inputProps} />;
	}
};

export default Input;
