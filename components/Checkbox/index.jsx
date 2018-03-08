import React, { Component } from 'react'

import './mediawiki-ui-checkbox.css'

class Checkbox extends Component {
  componentWillMount() {
    this.setState( { jsEnabled: false } );
  }
  componentDidMount() {
    this.setState( { jsEnabled: true } );
  }
  update( ev ) {
    var el = ev.currentTarget;
    if ( this.props.onToggle ) {
      this.props.onToggle( el.getAttribute( 'name' ), el.checked );
    }
  }
  render() {
    var props = this.props;
    return (
      <span className={this.state && this.state.jsEnabled ? 'client-js' : ''}>
        <div className="mw-ui-checkbox">
          <input type="checkbox" name={props.name}
            defaultChecked={props.checked}
            onChange={this.update.bind(this)}/>
          <label htmlFor={props.name}>
            {props.label}
          </label>
        </div>
      </span>
    );
  }
}

export default Checkbox;
