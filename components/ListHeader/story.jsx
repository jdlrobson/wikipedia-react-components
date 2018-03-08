import React from 'react';

import { storiesOf } from '@storybook/react';

import ListHeader from './/index.jsx';

storiesOf( 'ListHeader', module )
	.add( 'for introducing lists', () => {
		return (
			<ListHeader>I am a header that should be used before a list.</ListHeader>
		);
	} );
