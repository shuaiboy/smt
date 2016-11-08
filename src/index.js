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

import { changeBread } from './actions/actions';

const store = createStore(combineReducers({
	...rootReducers,
	routing: routerReducer
}));

//productionPlan
// Render the main component into the dom
const history = syncHistoryWithStore(hashHistory, store);

function handleEnter(e) {
	console.log(e);
	store.dispatch(changeBread(e.location.pathname.replace(/^\/|$\//, '')));
}
ReactDOM.render(
	(<Provider store={store}>
		<Router history={history}>
			<Route path="/" name="首页" component={App} onEnter={handleEnter}>
				<IndexRoute name="生产计划" component={ProductionPlan} onEnter={handleEnter} />
				<Route name="生产计划" path="/productionPlan" component={ProductionPlan} onEnter={handleEnter}/>
				<Route name="生产前" path="/beforeProduction" component={BeforeProduction} onEnter={handleEnter} />
					<Route name="不下Feeder入库" path="/FeederZonePickingList" component={FeederZonePickingList} onEnter={handleEnter} />
						<Route name="开始发料" path="/NoLessFeederStart" component={NoLessFeederStart} onEnter={handleEnter} />
			</Route>
		</Router>
	</Provider>),
	document.getElementById('app')
);