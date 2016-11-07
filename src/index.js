import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/Main';
import rootReducers from './reducers/reducers';
import ProductionPlan from './components/ProductionPlan';
import BeforeProduction from './components/BeforeProduction';
import FeederZonePickingList from './components/FeederZonePickingList';
import NoLessFeederStart from './components/NoLessFeederStart';

const store = createStore(combineReducers({
	...rootReducers,
	routing: routerReducer
}));

//productionPlan
// Render the main component into the dom
const history = syncHistoryWithStore(hashHistory, store);
ReactDOM.render(
	(<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={ProductionPlan} />
				<Route path="/productionPlan" component={ProductionPlan} />
				<Route path="/beforeProduction" component={BeforeProduction} />
					<Route path="/FeederZonePickingList" component={FeederZonePickingList}/>
						<Route path="/NoLessFeederStart" component={NoLessFeederStart}/>
			</Route>
		</Router>
	</Provider>),
	document.getElementById('app')
);