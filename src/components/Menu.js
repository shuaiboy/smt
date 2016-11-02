import React, { Component } from 'react';

export default class Menu extends Component {
	render() {
		return (
			<div className="bread">
				<ol className="breadcrumb">
					<li className="componentGeneratePlan"><a href="./">首页</a></li>
					<li className="active">系统设置</li>
				</ol>
			</div>
		);
	}
}