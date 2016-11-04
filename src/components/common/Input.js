import React, { Component } from 'react';

export default class Input extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value
		};
	}

	handleChange(e) {
		this.setState({ value: e.target.value });
		if (this.props.handleChange) {
			this.props.handleChange(this.state.value);
		}
	}

	render() {
		return (
			<input type="text" name={this.props.name} id={this.props.id} onChange={this.handleChange.bind(this)} value={this.state.value} />
		);
	}
}