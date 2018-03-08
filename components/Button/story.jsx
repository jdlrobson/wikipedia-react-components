import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './index.jsx';

storiesOf( 'Button', module )
	.add( 'needs a label', () => {
		return (
			<Button label="I am a button" />
		);
	} )
	.add( 'quiet', () => {
		return (
			<Button label="I am a quiet button" isQuiet={true} />
		);
	} )
	.add( 'primary', () => {
		return (
			<Button label="I am a primary button" isPrimary={true} />
		);
	} )
	.add( 'with href', () => {
		return (
			<Button label="I am a primary button with a link" href="https://wikipedia.org"
				isPrimary={true} />
		);
	} )
	.add( 'disabled', () => {
		return (
			<Button label="I am a disabled button" disabled={true} />
		);
	} )
	.add( 'disabled (quiet)', () => {
		return (
			<Button label="I am a disabled button" isQuiet={true} disabled={true} />
		);
	} )
	.add( 'disabled (primary)', () => {
		return (
			<Button label="I am a disabled primary button"
				isPrimary={true} disabled={true} />
		);
	} );
