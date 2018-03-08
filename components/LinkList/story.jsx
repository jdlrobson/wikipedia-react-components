import React from 'react';

import { storiesOf } from '@storybook/react';

import LinkList from './/index.jsx';

storiesOf( 'LinkList', module )
	.add( 'for listing links', () => {
		return (
			<LinkList>
				<a href='/'>Link 1</a>
				<a href='/'>Link 2</a>
			</LinkList>
		);
	} );
