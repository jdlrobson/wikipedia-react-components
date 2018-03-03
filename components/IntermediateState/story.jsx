import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';


import IntermediateState from './/index.jsx'


storiesOf('IntermediateState', module)
  .add('is used whenever something is loading.', () => {
    return <IntermediateState msg="Loading awesome" key="card-list-pending" />
  });
