import React from 'react';

import { storiesOf } from '@storybook/react';
import SearchForm from './index.jsx';

storiesOf( 'SearchForm', module )
	.add( 'is for searching, but hitting enter will submit the form', () => {
		return (
			<div>
				<p>Takes all the parameters of SearchInput</p>
				<SearchForm action="/search" placeholder="Type something!"/>
			</div>
		);
	} );
