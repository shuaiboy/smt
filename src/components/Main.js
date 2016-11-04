import React from 'react';
import Header from './Header';
import LeftNav from './LeftNav';
import Bread from './Bread';

require('styles/smt.css');

export default class AppComponent extends React.Component {
	render() {
		return (
			<div className="index">
				<Header />
				<div className="containers">
					<LeftNav />
					<div className="content">
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