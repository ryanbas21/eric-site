// inferno module
import Inferno from 'inferno';

// routing modules
import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';

// app components
import ContactUs from './contact/contactUs';
import Login from './login/login';
import SignUp from './signup/signup';
import Subscribe from './subscribe/subscribe';
import AppComponent from './app.js';
import Disclaimer from './disclaimer/disclaimer';
import IndexComponent from './homepage/index'
const browserHistory = createBrowserHistory();

const routes = (
	<Router history={ browserHistory }>
		<Route component={ AppComponent }>
				<IndexRoute component={ IndexComponent } />
				<Route path='/login' component={ Login } />
				<Route path='/signup' component= {SignUp } />
				<Route path='/disclaimer' component= { Disclaimer }/>
				<Route path='/subscribe' component= { Subscribe }/>
				<Route path='/contact' component= { ContactUs } />
		</Route>
	</Router>
);

Inferno.render(routes, document.getElementById('app'));
