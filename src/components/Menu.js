import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Bread extends Component {
	render() {
		return (
			<div id="menu" className="menu">
				<div id="componentGeneratePlan" className="menuItem">
					<Link to="/productionPlan"><img title="生产计划" src="images/shengchanjihua.png" /></Link>
					
				</div>
				<div id="compGenBefore"   className="menuItem">
					<img title="生产前" src="images/shengchanqian.png" />
				</div>
				<div id="compGening"   className="menuItem">
					<img title="生产中" src="images/shengchanzhong.png" />
				</div>
				<div id="compGenAfter" className="menuItem">
					<img title="生产后" src="images/shengchanhou.png" />
				</div>
				<div id="compSearch" className="menuItem">
					<img title="查询" src="images/sousuo.png" />
				</div>
				
				<div id="systemSettings" className="menuItem">
					<img title="系统设置" src="images/xitongshezhi.png" />
				</div>
				<div id="userAdministration" className="menuItem">
					<img title="用户管理" src="images/userAdministration.png" />
				</div>
			</div>
		);
	};
}