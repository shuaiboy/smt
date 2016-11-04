import React, { Component } from 'react';
import ProductionListButton from './ProductionListButton';

export default class ProductionList extends Component {
	render() {
		let buttons = this.props.buttonList.map((item, i) => {
			return (<div className="col-xs-6" key={'ProductionListButton-'+i}><ProductionListButton {...item} /></div>);
		});
		return (
			<div className="rows">
				{buttons}
			</div>
		);
	};
}

ProductionList.defaultProps = {
	buttonList: [{
		styles: {
			color: '#FED875'
		},
		imgSrc: 'images/buxiafeederjianliao.png',
		className: 'componentFeederZonePickingList',
		name: '不下feeder发料1'
	}, {
		styles: {
			color: '#FED875'
		},
		imgSrc: 'images/buxiafeederjianliao.png',
		className: 'componentFeederZonePickingList',
		name: '不下feeder发料2'
	}, {
		styles: {
			color: '#FED875'
		},
		imgSrc: 'images/buxiafeederjianliao.png',
		className: 'componentFeederZonePickingList',
		name: '不下feeder发料3'
	}]
}