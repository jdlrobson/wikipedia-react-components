import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Panel from './index.jsx'

storiesOf('Panel', module)
  .add('is pretty simple', () => {
    return (
      <div style={{width:'200px', background: 'red', padding: '8px' }}>
        <Panel>
          <p>I am a panel. Put me inside other components.</p>
        </Panel>
      </div>
    );
  })
  .add('takes a isHeading parameter', () => {
    return (
      <div style={{width:'200px', background: 'red', padding: '8px' }}>
        <Panel isHeading={true}>
          <p>I am a panel header.</p>
        </Panel>
        <Panel>
          <p>I am a normal panel.</p>
        </Panel>
      </div>
    );
  });
