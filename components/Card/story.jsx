import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Card from './index.jsx';

storiesOf( 'Card', module )
	.add( 'takes extract,title and url properties', () => {
		return (
			<Card
				url={'http://google.com'}
				title="Google"
				onClick={action( 'card-click' )}
				thumbnail={
					{
						source: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/80px-Wikipedia-logo-v2.svg.png'
					}
				}
				extracts={
					[
						'A list of items',
						'Like so.'
					]
				}></Card>
		);
	} )
	.add( 'without thumbnail', () => {
		return (
			<Card
				url={'http://google.com'}
				onClick={action( 'card-click' )}
				title="Google"
				extracts={
					[
						'A list of items',
						'Like so.'
					]
				}></Card>
		);
	} )
	.add( 'without placeholder illustration', () => {
		return (
			<Card showPlaceholderIllustration={false}
				onClick={action( 'card-click' )}
				url={'http://google.com'}
				title="Google"
				extracts={
					[
						'A list of items',
						'Like so.'
					]
				}></Card>
		);
	} );
