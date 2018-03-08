import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ErrorBox from './index.jsx'

storiesOf('ErrorBox', module)
  .add('is for displaying errors', () => {
    return (
      <ErrorBox msg="It all broke" />
    );
  });