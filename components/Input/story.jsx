import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Input from './index.jsx';

storiesOf( 'Input', module )
	.add( 'is for input (not searching)', () => {
		return (
			<Input name="name" onInput={action( 'on-input' )} />
		);
	} )
	.add( 'textarea', () => {
		return (
			<Input name="name" onInput={action( 'on-input' )} textarea={true} />
		);
	} )
	.add( 'defaultValue', () => {
		return (
			<Input name="name" onInput={action( 'on-input' )} textarea={true} defaultValue="The black cat sat on the mat." />
		);
	} )
	.add( 'disabled', () => {
		return (
			<Input name="name" onInput={action( 'on-input' )} disabled={true} />
		);
	} );
