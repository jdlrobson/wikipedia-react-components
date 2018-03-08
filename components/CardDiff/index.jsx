import React, { Component } from 'react'

import './styles.less'

import Icon from './../Icon'
import Card from './../Card'

class CardDiff extends Component {
  render(){
    var props = this.props;
    var username = props.user;
    var glyph = props.anon ? 'anonymous' : 'user';
    var extracts = [
      <span className="edit-summary">{props.comment || 'No edit summary'}</span>
    ];
    var userHref = props.userHref || '/' + props.language_project + '/User:' + encodeURIComponent( username );
    if ( username ) {
      extracts.unshift( <Icon glyph={glyph} type="before" label={username} className="mw-mf-user"
        href={userHref} /> );
    }
    var date = props.timestamp ? new Date( props.timestamp ) : null;
    var bytes = props.newlen ? newlen - props.oldlen : props.sizediff;
    var bytesDeltaClass = bytes < 0 ? 'bytes-removed' : 'bytes-added';
    var metaInfo = <div className="meta">
      { date &&
        <p className="timestamp">{date.getUTCHours()}:{date.getUTCMinutes()}</p>
      }
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
