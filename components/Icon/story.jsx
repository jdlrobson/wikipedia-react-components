import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import './story.css'
import Icon from './index.jsx'

storiesOf('Icon', module)
  .add('needs a glyph that is defined in the stylesheet', () => {
    return (
      <div>
        <p>By default label becomes the tooltip</p>
        <Icon glyph="language" label='Choose a language' />
      </div>
    );
  })
  .add('with text', () => {
    return (
      <div>
        <p>specify type as before to have text alongside the language</p>
        <Icon glyph="language" type='before' label='Choose a language' />
      </div>
    );
  });