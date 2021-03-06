import Inferno from 'inferno';
import { Link } from 'inferno-router';
import ContactUs from './contact/contactus';
import Login from './login/login';
import SignUp from './signup/signup';
import Subscribe from './subscribe/subscribe';
import IndexComponent from './homepage/index';
import Disclaimer from './disclaimer/disclaimer';

const NavBar = props =>
<nav className="breadcrumbs" role='menubar' ariaLabel="breadcrumbs">
  <ul className='no-bullet'>
      <li><Link to='/'> Home </Link></li>
      <li><Link to='/contact'> Contact Us </Link></li>
      <li><Link to='/disclaimer'> Disclaimer </Link></li>
      <li><Link to='/login'> Log-In </Link></li>
      <li><Link to='/signup'> Sign Up </Link></li>
      <li><Link to='/subscribe'> Subscribe </Link></li>
    </ul>
  </nav>



export default NavBar;
