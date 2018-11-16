import React, { Component } from 'react';

import './mediawiki-ui-button.css';

class Button extends Component {
	componentWillMount() {
		this.setState( { jsEnabled: false } );
	}
	componentDidMount() {
		this.setState( { jsEnabled: true } );
	}
	render() {
		var btnProps,
			props = this.props,
			disabled = false,
			modifiers = props.isPrimary ? 'mw-ui-primary mw-ui-progressive' : '';

		modifiers += props.isQuiet ? 'mw-ui-quiet' : '';
		modifiers += props.className ? ' ' + props.className : '';

		if ( !this.state.jsEnabled && props.onClick && !props.href ) {
			disabled = true;
		} else {
			disabled = props.disabled;
		}
		btnProps = Object.assign( {}, props, {
			className: 'mw-ui-button ' + modifiers,
			disabled,
			isPrimary: undefined,
			isQuiet: undefined
		} );
		return btnProps.href ? <a {...btnProps}>{props.label}{props.children}</a> :
			<button {...btnProps}>{props.label}{props.children}</button>;
	}
}

export default Button;
