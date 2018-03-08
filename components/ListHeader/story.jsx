import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import ListHeader from './/index.jsx'

storiesOf('ListHeader', module)
  .add('for introducing lists', () => {
    return (
      <ListHeader>I am a header that should be used before a list.</ListHeader>
    );
  });
