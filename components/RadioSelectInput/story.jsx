import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import RadioSelectInput from './index.jsx';

storiesOf( 'RadioSelectInput', module )
	.add( 'default', () => {
		return (
			<RadioSelectInput onChange={action( 'on-change' )}>
				<input name="radio1" type="radio" value="a" key="input-1" />
				<label key="label-1">Option 1</label>
				<input name="radio1" type="radio" value="b" key="input-2" />
				<label key="label-2">Option 2</label>
				<input name="radio1" type="radio" value="c" key="input-3" />
				<label key="label-3">Option 3</label>
			</RadioSelectInput>
		);
	} );
