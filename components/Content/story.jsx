import React from 'react';

import { storiesOf } from '@storybook/react';
import Content from './index.jsx';

storiesOf( 'Content', module )
	.add( 'is for wrapping any thing which contains content', () => {
		return (
			<Content className="my-other-class">
				<p>I am a very boring component. Any HTML or components can go inside me but I adapt to different displays centering on large screens.</p>
			</Content>
		);
	} );
