import React, { Component } from 'react';

import './radio.css';

class RadioSelectInput extends Component {
	onChange( ev ) {
		this.props.onChange(
			ev.currentTarget.querySelector( 'input' ).value
		);
	}
	render() {
		const props = this.props,
			labels = props.children.filter(
				( c ) => c.type === 'label'
			),
			radios = props.children.filter(
				( c ) => c.type === 'input'
			);

		if ( labels.length !== radios.length ) {
			throw new Error( 'Expected an equal set of children that were `label` or `input[type=radio]`' );
		}
		return (
			<div className="radio-select-input" aria-disabled="false" role="radiogroup">
				{
					radios.map( ( r, i ) => {
						return (
							<label role="radio" className="radio-select-input__option"
								key={'radio-select-input-child-' + i}
								onClick={this.onChange.bind( this )}>
								<span className="radio-select-input__input" aria-disabled="false">
									{r}
									<span className="radio-select-input__status"></span>
								</span>
								<span className="radio-select-input__label">
									{labels[ i ].props.children}
								</span>
							</label>
						);
					} )
				}
			</div>
		);
	}
}

export default RadioSelectInput;
