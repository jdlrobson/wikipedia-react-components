import React, { Component } from 'react';

import './styles.less';

class HorizontalList extends Component {
	render() {
		var cl = this.props.className ? this.props.className + ' hlist' : 'hlist';
		return (
			<ul className={ cl + ( this.props.isSeparated ? ' separated' : '' )} id={this.props.id}>
				{ this.props.children.map( function ( child, i ) {
					return <li key={'hlist-' + i}>{child}</li>;
				} ) }
			</ul>
		);
	}
}

export default HorizontalList;
