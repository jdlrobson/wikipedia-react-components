import React, { Component } from 'react';

import './dropdown.css';

class RadioSelectInput extends Component {
	onChange( ev ) {
		this.props.onChange(
			ev.currentTarget.value
		);
	}
	render() {
		const select = (
			<select {...this.props}>{
				this.props.children
			}</select>
		);
		return (
			<div className="dropdown-widget">
				<div>WIP</div>
				{select}
			</div>
		);
	}
}

export default RadioSelectInput;
