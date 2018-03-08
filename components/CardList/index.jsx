import React, { Component } from 'react';

import './styles.less';

class CardList extends Component {
	render() {
		var className,
			props = this.props,
			isUnordered = !props.ordered;

		className = 'card-list component-card-list' +
			( isUnordered ? ' card-list-unordered' : '' );

		if ( props.className ) {
			className += ' ' + props.className;
		}
		return props.children && props.children.length ? (
			<div className={className}>{props.children}</div>
		) : <div className="card-list-empty">{props.emptyMessage}</div>;
	}
}

export default CardList;
