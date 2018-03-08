import React from 'react';
import { storiesOf } from '@storybook/react';
import TruncatedText from './index.jsx';

storiesOf( 'TruncatedText', module )
	.add( 'must have a fixed width and be used on inline elements', () => {
		return (
			<TruncatedText style={{ width: '200px' }}>
				<span>La de la de la de la. TruncatedText does its magic and very very long text gets truncated</span>
			</TruncatedText>
		);
	} );
