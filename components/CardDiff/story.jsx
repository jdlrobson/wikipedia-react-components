import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CardDiff from './index.jsx'

storiesOf('CardDiff', module)
  .add('needs a timestamp in ISO 8601', () => {
    return (
      <CardDiff timestamp="2018-02-14T18:39:58Z" title="Page" />
    );
  })
  .add('with comment', () => {
    return (
      <CardDiff timestamp="2018-02-14T18:39:58Z" title="Page" comment="Hello world" />
    );
  })
  .add('associated with a user', () => {
    return (
      <CardDiff timestamp="2018-02-14T18:39:58Z" title="Page" user="Jdlrobson"
        userHref="https://jdlrobson.com"
      />
    );
  })
  .add('associated with an anon', () => {
    return (
      <CardDiff timestamp="2018-02-14T18:39:58Z" title="Page"
        anon={true}
        user="0.0.0.0"
        userHref="https://0.0.0.0"
      />
    );
  })
  .add('with bytes changed', () => {
    return (
      <CardDiff timestamp="2018-02-14T18:39:58Z" title="Page"
        anon={true}
        user="0.0.0.0"
        sizediff={-100}
        userHref="https://0.0.0.0"
      />
    );
  })
  .add('with minor edit', () => {
    return (
      <CardDiff timestamp="2018-02-14T18:39:58Z" title="Page"
        anon={true}
        user="0.0.0.0"
        sizediff={1}
        minor={true}
        userHref="https://0.0.0.0"
      />
    );
  })