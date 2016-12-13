import Inferno from 'inferno';
import Component from 'inferno-component';
import Picture from './pictureComponent';
import NavBar from '../nav-bar';

const IndexComponent = props =>
      <div>
        <h1>EPB RESEARCH</h1>
        <button type='submit' className='button' onClick='/subscribe'>Subscribe</button>
        <Picture />
      </div>

export default IndexComponent;
