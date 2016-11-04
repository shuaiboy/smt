import React, { Component } from 'react';
import TableList from './common/TableList';
import Button from './common/Button';

export default class NoLessFeederStart extends Component {
	render() {
		let theads = [{
			key: 'id',
			value: 'id'
		}, {
			key: 'name',
			value: '姓名'
		}];

		let tbodys = [{
			id: '1',
			name: 'name1',
			age: '19'
		}, {
			id: '2',
			name: 'name2',
			age: '13'
		}];

		return (
			<div>
				<form className="detail-form" action="">
					<span>
						<img src="images/20.png" />
					</span>
					<span>
						<label htmlFor="">工单号:</label>
						<input type="text"/>
					</span>
					<span>
						<label htmlFor="">线别:</label>
						<input type="text"/>
					</span>
					<span>
						<label htmlFor="">机种:</label>
						<input type="text"/>
					</span>
				</form>
				
				<TableList theads={theads} tbodys={tbodys}/>

				<div className="cn">
					<Button classIs={['btn-primary', 'mr10']}>选料灭灯</Button>
					<Button classIs={['btn-primary', 'mr10']}>回到生产计划中</Button>
					<Button classIs={['btn-primary', 'mr10']}>转到仓库房发料</Button>
					<Button classIs={['btn-primary']}>扣账</Button>
				</div>

			</div>
		);
	}
}