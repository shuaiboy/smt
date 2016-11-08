import React, { Component } from 'react';
import { Link } from 'react-router';
import { getBreadArr } from '../utils/bread';

/**
 * [BreadAll 所有页面抽象对象]
 * @type {Object}
 */
const BreadAll = {
	id: 0,
	name: '首页',
	to: '/',
	children: [{
		id: 1,
		name: '生产计划',
		to: 'productionPlan'
	}, {
		id: 2,
		name: '生产前',
		to: 'beforeProduction',
		children: [{
			id: 201,
			name: '不下Feeder发料',
			to: 'FeederZonePickingList',
			children: [{
				id: 20101,
				name: '开始发料',
				to: 'NoLessFeederStart',
			}]
		}, {
			id: 202,
			name: '仓库房发料',
			to: '',
			children: []
		}, {
			id: 203,
			name: '上Feeder发料',
			to: '',
			children: []
		}, {
			id: 204,
			name: '上模组',
			to: 'shangmozu',
			children: []
		}]
	}]
};



export default class Bread extends Component {
	render() {
		let breadArr = getBreadArr(BreadAll, this.props.changeBread);
		let liHtml = <li key="bread-li-index"><Link to="">首页</Link></li>;
		if (breadArr && breadArr.length > 0) {
			liHtml = breadArr.reverse().map((item, i) => {
				if (breadArr.length == (i + 1)) {
					return <li key={'bread-li-'+i}>{item.name}</li>;
				} else {
					return <li key={'bread-li-'+i}><Link to={item.to}>{item.name}</Link></li>
				}
			});
		}
		return (
			<div className="bread">
			<ol className="breadcrumb">
				{liHtml}
			</ol>
		</div>
		);
	}
}