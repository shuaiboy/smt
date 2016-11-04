import React, { Component } from 'react';
import ProductionList from './common/ProductionList';

export default class BeforeProduction extends Component {
	render() {
		let buttonList = [{
			styles: {
				color: '#FED875'
			},
			imgSrc: 'images/buxiafeederjianliao.png',
			className: 'FeederZonePickingList',
			name: '不下feeder发料'
		}, {
			styles: {
				color: '#a48ad4'
			},
			imgSrc: 'images/cangkufangjianliao.png',
			className: 'WarehouseMaterial',
			name: '仓库房发料'
		}, {
			styles: {
				color: '#ff8762'
			},
			imgSrc: 'images/shangfeederqu.png',
			className: 'UpperFeederList',
			name: '上feeder区'
		}, {
			styles: {
				color: '#1eb6aa'
			},
			imgSrc: 'images/cangkushangmozu.png',
			className: 'StoreUpperModule',
			name: '上模组'
		}];

		return (
			<ProductionList buttonList={buttonList} />
		);
	}
}