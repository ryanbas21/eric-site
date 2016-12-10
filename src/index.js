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
import Disclaimer from './disclaimer/disclaimer';
const browserHistory = createBrowserHistory();

const routes = (
	<Router history={ browserHistory }>
	<Route path='/login' component= { Login } />
	<Route path='/signup' component= {SignUp } />
	<Route path='/' component={ IndexComponent }/>
	<Route path='/disclaimer' component= { Disclaimer }/>
	<Route path='/subscribe' component= { Subscribe }/>
	<Route paht='/contact' component= {ContactUs}/>
	</Router>
);

Inferno.render(routes, document.getElementById('app'));
