import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CollectionEditorOverlay from './index.jsx';

storiesOf( 'CollectionEditorOverlay', module )
	.add( 'default', () => {
		return (
			<CollectionEditorOverlay title="Collection" description="This is a collection."
				owner="Wikipedians" onSaveCollection={action( 'onSaveCollection' )}
				onExit={action( 'onExit' )} />
		);
	} )
	.add( 'button disabled if title not set', () => {
		return (
			<CollectionEditorOverlay
				onSaveCollection={action( 'onSaveCollection' )}
				onExit={action( 'onExit' )} />
		);
	} );
