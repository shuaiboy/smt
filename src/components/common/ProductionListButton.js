import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ProductionListButton extends Component {
	handleClick(e) {
		//console.log(e.target);
	}

	render() {
		return (
			<div className={'module ' + this.props.className}>
				<Link to={this.props.className} onClick={this.handleClick.bind(this)}>
					<span className="compBSImg">
						<img src={this.props.imgSrc} />
					</span>
					<span className = "compBSSpan" style = { this.props.styles } >
						{ this.props.children || this.props.name }
					</span>
				</Link>
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