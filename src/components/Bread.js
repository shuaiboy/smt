import React, { Component } from 'react';
import { Link } from 'react-router';

const BreadAll = {
	id: 0,
	name: '首页',
	to: '',
	children: {
		1: {
			id: 1,
			name: '生产计划',
			to: ''
		},
		2: {
			id: 2,
			name: '生产前',
			to: '',
			children: {
				201: {
					id: 201,
					name: '不下Feeder发料',
					to: '',
					children: {

					}
				},
				202: {
					id: 202,
					name: '仓库房发料',
					to: '',
					children: {}
				},
				203: {
					id: 203,
					name: '上Feeder发料',
					to: '',
					children: {}
				},
				204: {
					id: 204,
					name: '上模组',
					to: '',
					children: {}
				}
			}
		}
	}
};

function parseBreadAll() {}

export default class Bread extends Component {
	render() {
		let breadArr = this.props.changeBread;
		let liHtml = breadArr.map((item, i) => {
			return <li key={'bread-li-'+i}><Link to={item.to}>{item.name}</Link></li>
		});

		return (
			<div className="bread">
				<ol className="breadcrumb">
				{/*	<li className="componentGeneratePlan"><a href="./">首页</a></li>
					<li className="active">系统设置</li>*/}
					{liHtml}
				</ol>
			</div>
		);
	}
}