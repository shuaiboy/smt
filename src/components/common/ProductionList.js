import React, { Component } from 'react';
import ProductionListButton from './ProductionListButton';

export default class ProductionList extends Component {
	componentWillMount() {
		const { store } = this.context;
	}
	render() {
		let buttons = this.props.buttonList.map((item, i) => {
			return (<div className="col-xs-6" key={'ProductionListButton-'+i}><ProductionListButton {...item} /></div>);
		});
		return (
			<div className="rows">
				{buttons}
			</div>
		);
	}
}

ProductionList.contextTypes = {
	store: React.PropTypes.object
}

ProductionList.defaultProps = {
	buttonList: []
}