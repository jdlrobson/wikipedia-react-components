import React from 'react';
import { Button, Overlay } from '../index.js';

class CtaDrawer extends React.Component {
	render() {
		var props = this.props;
		return (
			<Overlay>
				<p>{props.message}</p>
				<div>
					<Button label='Log in' href={props.loginUrl} isPrimary="1" />
				</div>
				<p>
					<a href={props.signupUrl}>{props.signupText}</a>
				</p>
			</Overlay>
		);
	}
}

CtaDrawer.defaultProps = {
	message: 'You need to sign in to use this feature',
	loginUrl: '//mediawiki.org/wiki/Special:Userlogin',
	signupUrl: '//www.mediawiki.org/w/index.php?title=Special:CreateAccount&campaign=wikipedia-react-components',
	signupText: 'Sign up at MediaWiki.org'
};

export default CtaDrawer;
