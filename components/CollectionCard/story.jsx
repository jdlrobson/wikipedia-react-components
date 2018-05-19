import React from 'react';

import { storiesOf } from '@storybook/react';

import CollectionCard from './index.jsx';

storiesOf( 'CollectionCard', module )
	.add( 'default', () => {
		return (
			<CollectionCard title="Collection" description="This is a collection."
				owner="Wikipedians"
				ownerUrl="https://en.wikipedia.org/wiki/List_of_lists_of_lists?action=history"
				url="https://en.wikipedia.org/wiki/List_of_lists_of_lists" />
		);
	} );
