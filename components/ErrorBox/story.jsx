import React from 'react';

import { storiesOf } from '@storybook/react';

import ErrorBox from './index.jsx';

storiesOf( 'ErrorBox', module )
	.add( 'is for displaying errors', () => {
		return (
			<ErrorBox msg="It all broke" />
		);
	} );
