import React, { Component } from 'react';
import TableList from './common/TableList';
import Button from './common/Button';
import createHistory from 'history/lib/createHashHistory';
const history = createHistory();

import { changeBread } from '../actions/actions';

export default class FeederZonePickingList extends Component {
	handleClick() {
		history.push({
			pathname: 'NoLessFeederStart'
		});
	}

	render() {
		console.log(354);
		console.log(changeBread);


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
				<TableList theads={theads} tbodys={tbodys}/>
				<div className="cn">
					<Button classIs={['btn-primary']} handleClick={this.handleClick}>&nbsp;&nbsp;&nbsp;&nbsp;开始发料&nbsp;&nbsp;&nbsp;</Button>
				</div>
			</div>
		);
	}
}