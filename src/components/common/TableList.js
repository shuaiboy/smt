import React, { Component } from 'react';

export default class TableList extends Component {
	render() {
		let theadsArr = [];
		let tbodyArr = [];

		theadsArr = this.props.theads.map((item, i) => {
			return (
				<th key={'TableList-' + i}>{item.value}</th>
			);
		});

		tbodyArr = this.props.tbodys.map((item, i) => {
			let tdArr = [];
			tdArr = this.props.theads.map((map, ii) => {
				let tmp = [];
				tmp.push(<td>{item[map.key]}</td>);
				return tmp;
			});
			return (
				<tr key={'TableList-tr-'+i}>
					<td><input type="checkbox" name="test" /></td>
					{tdArr}
				</tr>
			);
		});

		return (
			<table className="table table-bordered">
				<thead>
					<tr>
						<th></th>
						{theadsArr}
					</tr>
				</thead>
				<tbody>
					{tbodyArr}
				</tbody>
			</table>
		);
	}
}

/*TableList.propTypes = {
	theads: React.propTypes.array.isRequired,
	tbodys: React.propTypes.array.isRequired,
	btnName: React.propTypes.string.isRequired
};*/

TableList.defaultProps = {};