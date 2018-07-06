import React from 'react';
import Overlay from './../Overlay';

import './styles.less';

export default class CollectionOverlay extends React.Component {
	render() {
        var props = this.props;
        var title = props.title || 'Add to existing collection';
        var cancelMsg = props.cancelMsg || 'Cancel';

        return (
            <Overlay {...props} className="collection-overlay" isDrawer={true}>
                <h2>{title}</h2>
                <a key='edit-collection-cancel' className="cancel"
                    onClick={props.onExit}>{cancelMsg}</a>
                {props.children}
                <div className="collection-actions" key="collection-overlay-actions">
                    {props.actions}
                </div>
            </Overlay>
        );
	}
}
