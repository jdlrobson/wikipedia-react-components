import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Card from './../Card/index.jsx';
import CardDiff from './../CardDiff/index.jsx';
import ListHeader from './../ListHeader';
import CardList from './index.jsx';
import IntermediateState from './../IntermediateState/index.jsx';

const card = ( title ) => {
		return <Card
			title={title}
			url="http://wikipedia.org/wiki/React"
			onClick={action( 'card-click' )}
			thumbnail={
				{
					source: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/80px-Wikipedia-logo-v2.svg.png'
				}
			}
		/>;
	},
	cardList = ( ordered ) => {
		return (
			<CardList ordered={ordered}>
				{card( 'React' )}
				{card( 'Wikimedia' )}
				{card( 'Components' )}
			</CardList>
		);
	};

storiesOf( 'CardList', module )
	.add( 'that is empty', () => {
		return (
			<CardList emptyMessage="Oh no this list is empty!"></CardList>
		);
	} )
	.add( 'with cards (unordered)', () => {
		return <div><p>You can click a card in the list</p>{cardList()}</div>;
	} )
	.add( 'with cards (ordered)', () => {
		return cardList( true );
	} )
	.add( 'can be used with any children', () => {
		return (
			<CardList ordered={true}>
				<ListHeader>Header</ListHeader>
				<IntermediateState msg="Loading cards" key="card-list-pending" />
				<ListHeader>While you wait</ListHeader>
				<CardDiff
					timestamp="2018-02-14T18:39:58Z" title="Page"
					anon={true}
					user="0.0.0.0"
					userHref="https://0.0.0.0" />
			</CardList>
		);
	} );
