import React from 'react';

import { storiesOf } from '@storybook/react';
import CtaDrawer from './index.jsx';

storiesOf( 'CtaDrawer', module )
	.add( 'default', () => {
		return (
			<div>
				<p>CtaDrawers slide in from the bottom of the visible area prompting you to do something.</p>
				<CtaDrawer message="Login to my website, it is a lot more fun when you do that." />
			</div>
		);
	} );
