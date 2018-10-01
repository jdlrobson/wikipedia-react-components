import React, { Component } from 'react';

import './mediawiki-ui-icon.css';

class Icon extends Component {
	componentWillMount() {
		this.setState( { jsEnabled: false } );
	}
	componentDidMount() {
		this.setState( { jsEnabled: true } );
	}
	render() {
		var iconProps,
			props = this.props,
			glyph = props.glyph;

		// If the icon's only purpose is to run with JS and JS is not available it should be disabled
		if ( !this.state.jsEnabled ) {
			if ( !props.href && props.onClick ) {
				glyph = '';
			} else if ( props.href && props.href.indexOf( '#/' ) === 0 ) {
				glyph = '';
			}
		}

		iconProps = Object.assign( {}, props, {
			className: ( props.className || '' ) + ' mw-ui-icon mw-ui-icon-' + glyph + ' mw-ui-icon-' +
				( props.type || 'element' ),
			href: props.href,
			id: props.id,
			onClick: props.onClick
		} );
		if ( props.small ) {
			iconProps.className += ' mw-ui-icon-small';
		} else if ( props.large ) {
			iconProps.className += ' mw-ui-icon-large';
		}

		return iconProps.href ? <a {...iconProps}>{props.label}{props.children}</a> :
			<div {...iconProps}>{props.label}{props.children}</div>;
	}
}

export default Icon;
