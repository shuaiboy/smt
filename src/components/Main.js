import React from 'react';
import Header from './Header';
import LeftNav from './LeftNav';
import Bread from './Bread';

require('styles/smt.css');

export default class AppComponent extends React.Component {
	componentDidMount() {
		const { store } = this.context;
	}

	render() {
		const { store } = this.context;
		return (
			<div className="index">
				<Header />
				<div className="containers">
					<LeftNav />
					<div className="content">
						<Bread changeBread = {store.getState().changeBread} />
						<div className="component">
							{ this.props.children }
					    </div>
					</div>
				</div>
			</div>
		);
	}
}

AppComponent.contextTypes = {
	store: React.PropTypes.object
}

AppComponent.defaultProps = {};