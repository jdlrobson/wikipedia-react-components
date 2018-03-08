import React, { Component } from 'react';
import './styles.less';

import ErrorBox from './../ErrorBox';

class IntermediateState extends Component {
	componentWillMount() {
		this.setState( { jsEnabled: false } );
	}
	componentDidMount() {
		this.setState( { jsEnabled: true } );
	}
	render() {
		var props = this.props,
			msg = props.msg || 'Loading';

		return (
			<div className={ this.state.jsEnabled ? 'pending' : ''}>
				{this.state.jsEnabled ? msg : ''}
				<noscript><ErrorBox msg="Unable to load on your browser."/></noscript>
			</div>
		);
	}
}

export default IntermediateState;
