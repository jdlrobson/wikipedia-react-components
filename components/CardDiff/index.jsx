import React, { Component } from 'react'

import './styles.less'

import Icon from './../Icon'
import Card from './../Card'

class CardDiff extends Component {
  render(){
    var props = this.props;
    var username = props.user;
    var extracts = [
      <span className="edit-summary">{props.comment || 'No edit summary'}</span>
    ];
    if ( !props.title && username ) {
      // FIXME: Support anonymous users too
      extracts.unshift( <Icon glyph="user" type="before" label={username} className="mw-mf-user"
        href={'/' + props.language_project + '/User:' + encodeURIComponent( username )} /> );
    }
    var date = new Date( props.timestamp );
    var bytes = props.newlen ? props.newlen - props.oldlen : props.sizediff;
    var bytesDeltaClass = bytes < 0 ? 'bytes-removed' : 'bytes-added';
    var metaInfo = <div className="meta">
      <p className="timestamp">{date.getUTCHours()}:{date.getUTCMinutes()}</p>
      <p className={bytesDeltaClass}>{bytes}</p>
    </div>;
    if ( props.minor ) {
      extracts.push( <abbr className="minor-edit" title="This is a minor edit">m</abbr>);
    }

    return <Card className="card-diff" {...props}
      extracts={extracts} metaInfo={metaInfo} url={props.url} />
  }
}

export default CardDiff
