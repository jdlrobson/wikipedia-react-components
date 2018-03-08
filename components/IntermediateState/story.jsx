import React from 'react';

import { storiesOf } from '@storybook/react';

import IntermediateState from './/index.jsx';

storiesOf( 'IntermediateState', module )
	.add( 'is used whenever something is loading.', () => {
		return <IntermediateState msg="Loading awesome" key="card-list-pending" />;
	} );
