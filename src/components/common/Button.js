import React, { Component } from 'react';

export default class Button extends Component {
	constructor(props) {
		super(props);
	}

	handleClick(e) {
		if (this.props.handleClick) {
			this.props.handleClick(e);
		}
	}

	render() {
		return (
			<button
				onClick={this.handleClick.bind(this)}
				className={'btn'+ (this.props.classIs ? ' '+this.props.classIs.join(' ') : '')}
			>
				{this.props.children}
			</button>
		);
	}
}