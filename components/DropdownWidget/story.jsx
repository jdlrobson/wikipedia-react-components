import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DropdownWidget from './index.jsx';

storiesOf( 'DropdownWidget', module )
	.add( 'default', () => {
		return (
			<DropdownWidget onChange={action( 'on-change' )}>
				<option>Select one!</option>
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
			</DropdownWidget>
		);
	} );
