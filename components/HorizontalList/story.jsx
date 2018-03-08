import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import HorizontalList from './index.jsx'

storiesOf('HorizontalList', module)
  .add('for making items horizontal', () => {
    return (
      <HorizontalList>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </HorizontalList>
    );
  });
