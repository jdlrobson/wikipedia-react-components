import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Overlay from './index.jsx';
import Icon from './../Icon';
import Header from './../Header';
import ipsum from './../Header/ipsum';

storiesOf( 'Overlay', module )
	.add( 'drawer', () => {
		return (
			<Overlay>
				<Icon />
				<p>An overlay without a header is a drawer. You are responsible for deciding how it should be shown or not shown.</p>
			</Overlay>
		);
	} )
	.add( 'lightbox', () => {
		return (
			<Overlay isLightBox={true} onExit={action( 'onExit' )}>
				<p>An overlay with lightbox flag set is a lightbox.</p>
			</Overlay>
		);
	} )
	.add( 'with header', () => {
		return (
			<Overlay onExit={action( 'onExit' )}>
				<Header><h2>Look a header!</h2></Header>
				<strong>An overlay which has a Header as a first child will take up the full screen.</strong>
				<p>{ipsum()}</p>
			</Overlay>
		);
	} );
