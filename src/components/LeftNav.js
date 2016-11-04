import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Bread extends Component {
	render() {
		let menuHtml = this.props.menuList.map((item, i) => {
			return <div key={'menu-'+i} className="menuItem">
					<Link to={item.to}><img title={item.title} src={item.src} /></Link>
				</div>;
		});
		return (
			<div id="menu" className="menu">
				{menuHtml}
			</div>
		);
	}
}

Bread.defaultProps = {
	menuList: [{
		to: 'productionPlan',
		title: '生产计划',
		src: 'images/shengchanjihua.png'
	}, {
		to: 'beforeProduction',
		title: '生产前',
		src: 'images/shengchanqian.png'
	}, {
		to: 'inProduction',
		title: '生产中',
		src: 'images/shengchanzhong.png'
	}, {
		to: 'afterProduction',
		title: '生产后',
		src: 'images/shengchanhou.png'
	}, {
		to: 'inquire',
		title: '查询',
		src: 'images/sousuo.png'
	}, {
		to: 'systemSettings',
		title: '系统设置',
		src: 'images/xitongshezhi.png'
	}, {
		to: 'userManagement',
		title: '用户管理',
		src: 'images/userAdministration.png'
	}, ]
}