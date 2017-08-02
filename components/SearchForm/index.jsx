import React, { Component } from 'react'

import SearchInput from './../SearchInput'

import './styles.less'

class SearchForm extends Component {
  onDoSearch( ev ){
    ev.preventDefault();
    this.props.onSearchSubmit( ev.currentTarget.querySelector( 'input' ).value );
  }
  render() {
    var props = this.props;
    return (
      <form className="search-form" onSubmit={this.onDoSearch}
        method="GET"
        action={'/' +props.language_project + '/Special:Search'}>
        <SearchInput onClick={props.onClickSearch} onSearch={props.onSearch}
          name="search"
          placeholder={props.placeholder} defaultValue={props.defaultValue}
          focusOnRender={props.focusOnRender} />
      </form>
    )
  }
}

export default SearchForm;
