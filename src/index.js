import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route } from 'react-router';
import App from './components/Main';
import reducers from './reducers/reducers';
const store = createStore(reducers);

// Render the main component into the dom
ReactDOM.render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById('app')
);