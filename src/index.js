import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/Main';
import reducers from './reducers/reducers';
import ProductionPlan from './components/ProductionPlan';
import BeforeProduction from './components/BeforeProduction';
const store = createStore(reducers);
//productionPlan
// Render the main component into the dom
ReactDOM.render(
	(<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={ProductionPlan} />
			<Route path="/productionPlan" component={ProductionPlan} />
			<Route path="/beforeProduction" component={BeforeProduction} />
		</Route>
	</Router>),
	document.getElementById('app')
);