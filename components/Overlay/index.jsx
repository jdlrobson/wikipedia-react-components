/* global setTimeout */
import React, { Component } from 'react';

import './styles.less';

import Icon from './../Icon';
import Header from './../Header';
import Content from './../Content';

// Main component

class Overlay extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			visible: false
		};
	}
	onClose( ev ) {
		if ( this.props.onExit ) {
			this.props.onExit( ev );
		}
	}
	componentDidMount() {
		// Trigger animation
		setTimeout( function () {
			this.setState( {
				visible: true
			} );
		}.bind( this ), 0 );
	}
	render() {
		var header, icon,
			props = this.props,
			baseClass = 'overlay',
			overlayClass = ( props.className ? ' ' + props.className : '' ),
			visibleClass = this.state.visible ? ' visible' : '',
			closeIconGray = <Icon glyph='close-gray'
				className="close" onClick={this.onClose.bind( this )}/>,
			firstChild = props.children[ 0 ],
			children = props.children;

		if ( firstChild && firstChild.type === Header ) {
			children = props.children.slice( 1 );
			icon = <Icon glyph='close' onClick={this.onClose.bind( this )}
				className="cancel" />;

			if ( firstChild.props.fixed ) {
				overlayClass += ' overlay-with-fixed-header';
			}
			// Primary icon is mandatory. Assume action is close, if none given.
			if ( !firstChild.props.primaryIcon ) {
				header = React.cloneElement( firstChild, {
					primaryIcon: icon
				} );
			} else {
				header = firstChild;
			}
		} else if ( this.props.isLightBox ) {
			header = (
				<div className="lightbox-header">
					{closeIconGray}
				</div> );
			overlayClass += ' lightbox';
		} else {
			header = null;
			baseClass = 'drawer';
		}

		return (
			<div className={baseClass + overlayClass + visibleClass}>
				{header}
				<Content className="overlay-content">
					{children}
				</Content>
			</div>
		);
	}
}
Overlay.defaultProps = {
	isLightBox: false
};

export default Overlay;
