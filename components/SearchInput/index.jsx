import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './styles.less'

class SearchInput extends Component {
  onDoSearch( ev ){
    ev.preventDefault();
    this.props.onSearch( ev.currentTarget.value );
  }
  componentDidMount(){
    var input = ReactDOM.findDOMNode( this );
    if ( this.props.focusOnRender ) {
      input.focus();
      // show keyboard
      input.click();
    }
    if ( this.props.defaultValue ) {
      this.props.onSearch( this.props.defaultValue );
    }
  }
  render() {
    var props = this.props;
    return (
      <input className="search" type="search" placeholder={props.placeholder} ref="input"
        name={props.name} autoComplete="off"
        onClick={props.onClick} onInput={this.onDoSearch} defaultValue={props.defaultValue}
        onKeyUp={this.onDoSearch}/>
    )
  }
}

export default SearchInput;
