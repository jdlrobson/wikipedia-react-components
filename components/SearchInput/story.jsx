import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchInput from './index.jsx'

storiesOf('SearchInput', module)
  .add('is for searching', () => {
    return (
      <SearchInput name="name" onSearch={action('on-search')} />
    );
  })
  .add('can take placeholder', () => {
    return (
      <SearchInput name="name" onSearch={action('on-search')} placeholder="Type something!" />
    );
  })
  .add('can take default value', () => {
    return (
      <SearchInput name="name" onSearch={action('on-search')} defaultValue="Cats" />
    );
  });
