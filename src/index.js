// inferno module
import Inferno from 'inferno';

// routing modules
import { Router, Route } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

// app components
import ContactUs from './contact/contactus';
import Login from './login/login';
import SignUp from './signup/signup';
import Subscribe from './subscribe/subscribe';
import IndexComponent from './homepage/index';
const browserHistory = createBrowserHistory();

const routes = (
	<Router history={ browserHistory }>
	<Route component= { IndexComponent }> Home </Route>
	<Route component= { Login }> Log-In</Route>
	<Route component= {SignUp }> Sign-Up </Route>
	<Route component={ IndexComponent }></Route>
	<Route component= { Disclaimer }></Route>
	<Route component= { Subscribe }></Route>
	<Route component= {ContactUs}></Route>
	</Router>
);

Inferno.render(routes, document.getElementById('app'));
