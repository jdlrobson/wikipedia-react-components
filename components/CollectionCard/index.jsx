import React, { Component } from 'react';
import Card from './../Card';
import Icon from './../Icon';
import './styles.less';

class CollectionCard extends Component {
	render() {
		var props = this.props,
			extracts = [
				props.description
			];

		if ( props.owner ) {
			extracts.push( <Icon glyph="user" type="before" label={props.owner} className="mw-mf-user"
				href={props.ownerUrl} /> );
		}

		return <Card {...props} extracts={extracts} />;
	}
}

export default CollectionCard;
