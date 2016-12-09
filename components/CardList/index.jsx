import React from 'react'

import './styles.less'

export default React.createClass({
  render: function () {
    var props = this.props;
    var isUnordered = !props.ordered;
    var cards = props.cards;
    var className = 'card-list component-card-list' +
      ( isUnordered ?' card-list-unordered' : '' );

    if ( props.className ) {
      className += ' ' + props.className;
    }
    return props.children.length ? (
        <div className={className}>{props.children}</div>
      ) : <div className="card-list-empty">{props.emptyMessage}</div>;
  }
} );
