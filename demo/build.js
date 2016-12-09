import React from 'react'
import ReactDOM from 'react-dom'
import {Button, ErrorBox, Panel,
  Icon, Input, Checkbox,
  Card, CardList,
  CardWithLocation, CardDiff,
  TruncatedText, SearchInput, SearchForm,
  ListHeader, IntermediateState,
  LinkList, HorizontalList
} from './../components'

var container = document.getElementById('examples');

const EXAMPLE_CARD_NO_THUMBNAIL = {
  title: 'Card without thumbnail',
  showPlaceholderIllustration: false,
  extracts: [
    'Test',
    'Hello world'
  ]
};

const EXAMPLE_CARD_DIFF = {
  user: 'User Smith',
  comment: 'Fixed a typo.',
  sizediff: -1200,
  minor: true,
  url: 'http://trending.wmflabs.org/en.wikipedia/Special:MobileDiff/1',
  timestamp: '2016-11-20T21:57:43.558Z'
};

const EXAMPLE_CARD_THUMBNAIL = {
  title: 'React',
  url: 'http://wikipedia.org/wiki/React',
  onClick: function () {
    alert(0);
  },
  thumbnail: {
    source: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/80px-Wikipedia-logo-v2.svg.png'
  },
  extracts: [
    'Test',
    'Hello world'
  ]
};

const EXAMPLE_CARD_LOCATION = {
  title: 'CardWithLocation',
  coordinates: {
    dist: 2000
  },
  extracts: [
    'The distance expressed in the `coordinates.dist` parameter in meters will render below extracts.'
  ]
};

function newLine( headingText, headingLevel ) {
  var heading;
  headingLevel = headingLevel || '2';

  container.appendChild( document.createElement( 'hr' ) );
  if ( headingText ) {
    heading = document.createElement( 'h' + headingLevel );
    heading.textContent = headingText;
    container.appendChild( heading );
  }
}

function paragraph( text ) {
  var p = document.createElement( 'p' );
  p.textContent = text;
  container.appendChild( p );
}

function renderExample( ComponentClass, data ) {
  var ex = document.createElement( 'div' );
  container.appendChild( ex );
  // Button
  ReactDOM.render( React.createElement( ComponentClass, data ), ex );
}

newLine( 'Buttons' );

renderExample( Button, {
  label: 'Button'
});

renderExample( Button, {
  label: 'Button <isPrimary>',
  isPrimary: true
});

newLine( 'Icon' );

paragraph( 'Icons will require the use of an icon pack. You can have a standalone icon without text:' );

renderExample( Icon, {
  glyph: 'language'
});

paragraph( 'Or render an icon alongside a label using the `before` type.' );

renderExample( Icon, {
  glyph: 'language',
  type: 'before',
  label: 'Icon label <before>'
});

newLine( 'Forms' );

renderExample( Input, {
  placeholder: 'Input'
});

renderExample( Input, {
  placeholder: 'Input.textarea',
  textarea: true
});

renderExample( Checkbox, {
  label: 'Checkbox',
  checked: true,
  onToggle: function ( name, value ) {
    console.log(name, value, 'changed')
  },
  name: 'checkbox-1'
});

renderExample( SearchInput, {
  placeholder: 'SearchInput component'
});

renderExample( SearchForm, {
  placeholder: 'SearchForm component',
  language_project: 'wiki',
  onSearch: function ( term ) {
    alert( term );
  }
});

newLine( 'Panel containers' );

renderExample( Panel, {
  isHeading: true,
  children: [
    React.createElement( 'span', {},
      'Panel.isHeading' )
  ]
});

renderExample( Panel, {
  children: [
    React.createElement( 'div', {},
      'Normal panel' )
  ]
});

newLine( 'Cards' );

paragraph( 'Cards can be rendered with thumbnails and onClick events...' );

renderExample( Card, EXAMPLE_CARD_THUMBNAIL );

paragraph( '... or without thumbnails:' );

renderExample( Card, EXAMPLE_CARD_NO_THUMBNAIL);

newLine( 'Specialised cards', '3' );

paragraph( 'Cards exist for locations:' );

renderExample( CardWithLocation, EXAMPLE_CARD_LOCATION);

paragraph( 'and links to diffs' );

renderExample( CardDiff, EXAMPLE_CARD_DIFF);


newLine( 'Lists' );

renderExample( ListHeader, {
  children: [
    React.createElement( 'div', {}, 'ListHeader' )
  ]
});

renderExample( LinkList, {
  children: [
    React.createElement( 'a', { href: '#' }, 'LinkList - Link 1' ),
    React.createElement( 'a', { href: '#' }, 'LinkList - Link 2' ),
    React.createElement( 'a', { href: '#' }, 'LinkList - Link 3' )
  ]
});

renderExample( HorizontalList, {
  isSeparated: true,
  children: [
    React.createElement( 'a', { href: '#' }, 'HorizontalList - Link 1' ),
    React.createElement( 'a', { href: '#' }, 'HorizontalList - Link 2' ),
    React.createElement( 'a', { href: '#' }, 'HorizontalList - Link 3' )
  ]
});

paragraph( 'A CardList can contain children other than Card such as IntermediateState...' );

renderExample( CardList, {
  children: [
      <IntermediateState msg="Loading cards" />
  ]
});

paragraph( '... or an ErrorBox' );

renderExample( CardList, {
  children: [
      <ErrorBox msg="An error occurred while loading your cards." />
  ]
});

paragraph( 'Use them to render lists of Cards (responsive)' );

renderExample( CardList, {
  ordered: false,
  children: [
    <Card {...EXAMPLE_CARD_THUMBNAIL} title="Card 1" />,
    <Card {...EXAMPLE_CARD_THUMBNAIL} title="Card 2" />,
    <Card {...EXAMPLE_CARD_THUMBNAIL} title="Card 3" />
  ]
});

paragraph( 'You can also force them to be ordered to always be in a single column:' );

renderExample( CardList, {
  ordered: true,
  children: [
    <Card {...EXAMPLE_CARD_THUMBNAIL} title="Card 1" />,
    <Card {...EXAMPLE_CARD_THUMBNAIL} title="Card 2" />,
    <Card {...EXAMPLE_CARD_THUMBNAIL} title="Card 3" />
  ]
});

paragraph( 'Or to render CardDiffs or any other Card type. You can also pass a ListHeader.' );

renderExample( CardList, {
  ordered: true,
  children: [
    <ListHeader>Header</ListHeader>,
    <CardDiff {...EXAMPLE_CARD_DIFF} title="Title 1" />,
    <CardDiff {...EXAMPLE_CARD_DIFF} title="Title 2" />,
    <ListHeader>Another header</ListHeader>,
    <CardDiff {...EXAMPLE_CARD_DIFF} title="Title 3" />
  ]
});

newLine( 'Misc' );

renderExample( ErrorBox, {
  msg: 'ErrorBox component'
});

renderExample( IntermediateState, {
  msg: 'IntermediateState `msg` shown while you wait'
});

renderExample( TruncatedText, {
  children: [
    React.createElement( 'span', {},
      'TruncatedText does its magic and very very long text gets truncated' )
  ]
});
