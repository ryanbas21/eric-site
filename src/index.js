// inferno module
import Inferno from 'inferno';

// routing modules
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

// app components
import IndexComponent from './homepage/index.js';

const browserHistory = createBrowserHistory();

const routes = (
	<Router history={ browserHistory }>
	<Route component={ IndexComponent }></Route>
	</Router>
);

Inferno.render(routes, document.getElementById('app'));
