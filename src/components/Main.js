import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Bread from './Bread';

require('styles/smt.css');

export default class AppComponent extends React.Component {
	render() {
		console.log('asdfsadf', this.props);
		return (
			<div className="index">
				<Header />
				<div className="containers">
					<Menu />
					<div>
						<Bread />
						<div className="component">
							{ this.props.children }
					    </div>
					</div>
				</div>
			</div>
		);
	}
}

AppComponent.defaultProps = {};