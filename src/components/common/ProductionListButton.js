import React, { Component } from 'react';

export default class ProductionListButton extends Component {
	render() {
		return (
			<div className={'module ' + this.props.className}>
				<span className="compBSImg">
					<img src={this.props.imgSrc} />
				</span>
				<span className="compBSSpan" style={this.props.styles}>{this.props.children || this.props.name}</span>
			</div>
		);
	};
}

ProductionListButton.defaultProps = {
	styles: {
		color: '#FED875'
	},
	imgSrc: 'images/buxiafeederjianliao.png',
	className: 'componentFeederZonePickingList',
	name: '不下feeder发料'
}