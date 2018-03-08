import React from 'react';

import { storiesOf } from '@storybook/react';

import CardWithLocation from './index.jsx';

storiesOf( 'CardWithLocation', module )
	.add( 'with distance', () => {
		return (
			<CardWithLocation title='San Francisco'
				coordinates={{ dist: 2000 }} description={'Hippies and hills'} />
		);
	} )
	.add( 'without distance', () => {
		return (
			<CardWithLocation title='San Francisco'
				description={'Hippies and hills'} />
		);
	} );
