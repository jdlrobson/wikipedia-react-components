import React, { Component } from 'react';

import './mediawiki-ui-checkbox.css';

class Checkbox extends Component {
	componentWillMount() {
		this.setState( { jsEnabled: false } );
	}
	componentDidMount() {
		this.setState( { jsEnabled: true } );
	}
	update( ev ) {
		var el = ev.currentTarget;
		if ( this.props.onToggle ) {
			this.props.onToggle( el.getAttribute( 'name' ), el.checked );
		}
	}
	render() {
		const props = this.props,
			className = this.state && this.state.jsEnabled ? 'client-js ' : ' ';
		return (
			<span className={className + props.className} id={props.id}>
				<div className="mw-ui-checkbox">
					<input type="checkbox" name={props.name}
						defaultChecked={props.checked}
						onChange={this.update.bind( this )}/>
					<label htmlFor={props.name}>
						{props.label}
					</label>
				</div>
			</span>
		);
	}
}

export default Checkbox;
