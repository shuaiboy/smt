import React, { Component } from 'react';

//生产计划
export default class ProductionPlan extends Component {
	render() {
		let children = [];

		return (
			<table>
				<theader>
					<tr>
						<th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
						<th>线别</th>
						<th>SAP群组工单</th>
						<th>架位数</th>
						<th>工单数量</th>
						<th>面别</th>
						<th>机种</th>
						<th>组合料号</th>
						<th>目标数量</th>
						<th>产出数量</th>
						<th>换线剩余时间</th>
						<th>工单进度</th>
						<th>不下Feeder区发料时间（预计/实际）</th>
						<th>仓库发料时间（预计/实际）</th>
						<th>上Feeder时间（预计/实际）</th>
						<th>上模组时间（预计/实际）</th>
						<th>换线时间（预计/实际）</th>
						<th>生产结束时间（预计/实际）</th>
						<th>下模组时间（预计/实际） </th>
						<th>不下Feeder区入库时间（预计/实际）</th>
						<th>退料分条架时间（预计/实际）</th>
						<th>退料入库房时间（预计/实际）</th>
						<th>状态</th>
					</tr>
				</theader>
				<tbody>
					{children}
				</tbody>
			</table>
		);
	};
}