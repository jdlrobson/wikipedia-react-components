import React, { Component } from 'react';

import TruncatedText from '../TruncatedText';

import './styles.less';

const BG_PLACEHOLDER = 'linear-gradient(transparent,transparent),url(data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22utf-8%22%3F%3E%0A%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2056%2056%22%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23eee%22%20d%3D%22M0%200h56v56H0z%22%2F%3E%0A%20%20%20%20%3Cpath%20fill%3D%22%23999%22%20d%3D%22M36.4%2013.5H17.8v24.9c0%201.4.9%202.3%202.3%202.3h18.7v-25c.1-1.4-1-2.2-2.4-2.2zM30.2%2017h5.1v6.4h-5.1V17zm-8.8%200h6v1.8h-6V17zm0%204.6h6v1.8h-6v-1.8zm0%2015.5v-1.8h13.8v1.8H21.4zm13.8-4.5H21.4v-1.8h13.8v1.8zm0-4.7H21.4v-1.8h13.8v1.8z%22%2F%3E%0A%3C%2Fsvg%3E%0A)';

class Card extends Component {
	render() {
		var illustration, heading,
			props = this.props,
			title = this.props.title,
			className = this.props.className ? 'card ' + this.props.className : 'card',
			meta = this.props.metaInfo,
			styles = {
				backgroundImage: this.props.thumbnail ?
					'url("' + this.props.thumbnail.source + '")' :
					meta ? 'none' : BG_PLACEHOLDER
			},
			extracts = this.props.extracts.map( function ( item, i ) {
				return (
					<p className="card-extract" key={'card-extract-' + title + '-' + i}
						title={typeof item === 'string' ? item : null}>
						<TruncatedText>{item}</TruncatedText>
					</p>
				);
			} ),
			url = props.url !== undefined && props.url !== null ? props.url :
				'/wiki/' + encodeURIComponent( title );

		if ( this.props.thumbnail || this.props.metaInfo || this.props.showPlaceholderIllustration ) {
			illustration = <div className="card-thumb" style={styles}>{meta}</div>;
		}

		if ( title ) {
			heading = (
				<h3>
					<a title={title} href={url}><span>{title}</span></a>
				</h3>
			);
		} else {
			heading = <a className="card-link" href={url} />;
		}

		return (
			<div className={className} onClick={props.onClick}>
				{this.props.indicator}
				{illustration}
				<div className="card-detail">
					{heading}
					{extracts}
				</div>
			</div>
		);
	}
}

Card.defaultProps = {
	showPlaceholderIllustration: true,
	url: null,
	title: null,
	indicator: null,
	thumbnail: null,
	extracts: []
};

export default Card;
