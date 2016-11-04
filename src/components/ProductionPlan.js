import React, { Component } from 'react';

//生产计划
export default class ProductionPlan extends Component {
	render() {
		let children = [];

		return (
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
						<th>线别</th>
						<th>SAP群组工单</th>
						<th>架位数</th>
						<th>工单数量</th>
						<th>面别</th>
						<th>退料分条架时间（预计/实际）</th>
						<th>退料入库房时间（预计/实际）</th>
						<th>状态</th>
					</tr>
				</thead>
				<tbody>
					{children}
				</tbody>
			</table>
		);
	};
}