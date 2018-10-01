import React from 'react';
import Overlay from './../Overlay';

import './styles.less';

export default class CollectionOverlay extends React.Component {
	render() {
		var props = this.props,
			title = props.title || 'Add to existing collection',
			cancelMsg = props.cancelMsg || 'Cancel';

		return (
			<Overlay {...props} className={'collection-overlay ' + props.className} isDrawer={true}>
				<h2>{title}</h2>
				{ props.onExit && <a key='edit-collection-cancel' className="cancel"
					onClick={props.onExit}>{cancelMsg}</a> }
				{props.children}
				<div className="collection-actions" key="collection-overlay-actions">
					{props.actions}
				</div>
			</Overlay>
		);
	}
}
