import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CollectionOverlay from './index.jsx';
import Icon from './../Icon';
import './icons.less';

storiesOf( 'CollectionOverlay', module )
	.add( 'with list', () => {
		return (
			<CollectionOverlay onExit={action( 'onExit' )}>
				<ul>
					<li>Donald Trump</li>
					<li>Barack Obama</li>
					<li>George Bush</li>
				</ul>
			</CollectionOverlay>
		);
	} )
	.add( 'with list and actions', () => {
		return (
			<CollectionOverlay onExit={action( 'onExit' )}
				actions={[
					<a>Create</a>
				]}
			>
				<ul>
					<li>Donald Trump <Icon glyph="blank-tick" /></li>
					<li>Barack Obama <Icon glyph="tick" /></li>
					<li>George Bush <Icon glyph="tick" /></li>
				</ul>
			</CollectionOverlay>
		);
	} );
