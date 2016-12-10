import Inferno from 'inferno';
import { Link } from 'inferno-router';
import ContactUs from './contact/contactus';
import Login from './login/login';
import SignUp from './signup/signup';
import Subscribe from './subscribe/subscribe';
import IndexComponent from './homepage/index';

const NavBar = props =>
  <nav data-magellan-expedition="fixed">
    <dl class="sub-nav">
      <Link component= { IndexComponent }> Home </Link>
      <Link component= { ContactUs }> ContactUs </Link>
      <Link component= { Disclaimer }> Disclaimer </Link>
      <Link component= { Login }> Log-In </Link>
      <Link component= {SignUp}> Sign Up </Link>
      <Link component= { Subscribe }> Subscribe </Link>
    </dl>
  </nav>



export default NavBar;
