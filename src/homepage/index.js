import Inferno from 'inferno';
import Component from 'inferno-component';
import Picture from './pictureComponent';
import NavBar from '../nav-bar';
class IndexComponent extends Component {
  constructor() {
    super()
  this.subscribe = this.subscribe.bind(this)  ;
  }

  subscribe(){

  }

  render(){
    return (
      <div>
        <NavBar />
        <h1>EPB RESEARCH</h1>
        <button type='submit' className='button' onClick={this.subscribe}>Subscribe</button>
        <Picture />
      </div>
    )
  }
}

export default IndexComponent;
