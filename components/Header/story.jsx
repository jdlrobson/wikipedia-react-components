import React from 'react';

import { storiesOf } from '@storybook/react';
import Header from './index.jsx';
import Icon from './../Icon';
import Content from './../Content';

import './stories.less';
import ipsum from './ipsum';

storiesOf( 'Header', module )
	.add( 'goes at the top of any view', () => {
		return (
			<Header><h2>Look a header!</h2></Header>
		);
	} )
	.add( 'accepts a primary and secondary icons(s)', () => {
		return (
			<Header
				primaryIcon={ <Icon glyph="mainmenu" /> }
				secondaryIcons={
					[
						<Icon glyph="search" />,
						<Icon glyph="notifications" />
					]
				}
			>
				<h2>Look a header!</h2>
			</Header>
		);
	} )
	.add( 'accepts a fixed option', () => {
		return (
			<div>
				<Header
					primaryIcon={ <Icon glyph="mainmenu" /> }
					secondaryIcons={
						[
							<Icon glyph="search" />,
							<Icon glyph="notifications" />
						]
					}
					fixed={true}
				>
					<h2>Look a fixedheader!</h2>
				</Header>
				<Content>{ipsum()}</Content>
			</div>
		);
	} );
