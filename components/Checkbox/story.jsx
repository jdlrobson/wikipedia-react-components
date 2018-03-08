import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Checkbox from './index.jsx'

storiesOf('Checkbox', module)
  .add('default', () => {
    return (
      <Checkbox name="checky-1" label="I am a checkbox! Click me!"
        onToggle={action('on-toggle')} />
    );
  })
  .add('checked', () => {
    return (
      <Checkbox name="checky-2" checked={true} label="I am checked by default" />
    );
  });
