import React from 'react';

import Button from './../Button';
import Input from './../Input';
import IntermediateState from './../IntermediateState';
import CollectionCard from './../CollectionCard';

import Overlay from './../Overlay';

import './styles.less';

class CollectionEditorOverlay extends React.Component {
	constructor() {
		super();
		this.state = {
			waiting: true,
			title: null,
			thumbnail: null,
			description: null
		};
	}
	componentDidMount() {
		this.setState( { title: '', description: '', waiting: false } );
	}
	updateDescription( ev ) {
		this.setState( { description: ev.currentTarget.value } );
	}
	updateTitle( ev ) {
		this.setState( { title: ev.currentTarget.value } );
	}
	save() {
		var onExit = this.props.onExit.bind( this ),
			title = this.props.title,
			thumb = this.state.thumbnail ? this.state.thumbnail.title : null;

		this.setState( { waiting: true } );
		const done = this.props.onSaveCollection( title, thumb, this.state.description );
		if ( done ) {
			done.then( function () {
				onExit();
			} );
		}
	}
	render() {
		var body,
			props = this.props,
			state = this.state,
			description = state.description || props.description,
			thumbnail = state.thumbnail || props.thumbnail,
			title = state.title || props.title;

		if ( !this.state.waiting && this.state.title !== undefined ) {
			body = (
				<div>
					<CollectionCard key="collection-editor-overlay-preview"
						thumbnail={thumbnail} title={title} description={description}/>
					<label>{props.nameFieldLabel}</label>
					<Input defaultValue={title} onInput={this.updateTitle.bind( this )} />
					<label>{props.descriptionFieldLabel}</label>
					<Input defaultValue={description} onInput={this.updateDescription.bind( this )} />
					<Button label={props.buttonSaveLabel} isPrimary={true} onClick={this.save.bind( this )} />
					<Button label={props.buttonCancelLabel} onClick={props.onExit.bind( this )} />
				</div>
			);
		} else {
			body = <IntermediateState />;
		}
		return (
			<Overlay {...props} className="collection-editor-overlay" isDrawer={true}>
				{body}
			</Overlay>
		);
	}
}

CollectionEditorOverlay.defaultProps = {
	descriptionFieldLabel: 'Description',
	nameFieldLabel: 'Name',
	buttonSaveLabel: 'Save',
	buttonCancelLabel: 'Cancel'
};

export default CollectionEditorOverlay;
