import React from 'react';

import { storiesOf } from '@storybook/react';
import Toast from './index.jsx';

storiesOf( 'Toast', module )
  .add( 'default', () => {
    return (
      <div>
        <p>Toast will appear at the bottom of a view.
        The client is responsible for handling when they are dismissed.
        </p>
        <Toast>
          <p>Happy birthday!</p>
        </Toast>
      </div>
    );
  } );
