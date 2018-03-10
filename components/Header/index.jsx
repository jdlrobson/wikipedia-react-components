import React, { Component } from 'react';

import Content from './../Content';

import './styles.less';

class Header extends Component {
	render() {
		var primaryIcon,
			suffix = this.props.fixed ? ' position-fixed' : '',
			secondaryIcons = this.props.secondaryIcons;

		if ( this.props.className ) {
			suffix += ' ' + this.props.className;
		}

		// FIXME: overlay-title is used for consistency with MobileFrontend but not needed
		primaryIcon = this.props.primaryIcon ? (
			<div>
				{this.props.primaryIcon}
			</div>
		) : null;

		return (
			<div className={'header-container' + suffix}>
				<Content className="header toolbar">
					{primaryIcon}
					<div className='main overlay-title'>
						{this.props.children}
					</div>
					{
						secondaryIcons.map( function ( icon, i ) {
							return (
								<div key={'secondary-icon-' + i}>{icon}</div>
							);
						} )
					}
				</Content>
			</div>
		);
	}
}

Header.defaultProps = {
	fixed: false,
	secondaryIcons: [],
	primaryIcon: null
};

export default Header;
