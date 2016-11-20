import React from 'react'
import ReactDOM from 'react-dom'
import {Button, ErrorBox, Panel,
  Icon, Input, Checkbox,
  Card,
  TruncatedText, SearchInput, SearchForm,
  ListHeader, IntermediateState,
  LinkList, HorizontalList
} from './../components'

var container = document.getElementById('examples');

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

newLine( 'Cards' );

paragraph( 'Cards can be rendered with thumbnails and onClick events...' );

renderExample( Card, {
  title: 'React',
  url: 'http://wikipedia.org/wiki/React',
  onClick: function () {
    alert(0);
  },
  thumbnail: {
    source: 'image.jpg'
  },
  extracts: [
    'Test',
    'Hello world'
  ]
});

paragraph( '... or without thumbnails:' );

renderExample( Card, {
  title: 'Card without thumbnail',
  showPlaceholderIllustration: false,
  extracts: [
    'Test',
    'Hello world'
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
