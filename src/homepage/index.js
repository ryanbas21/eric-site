import Inferno from 'inferno';
import Component from 'inferno-component';
import Picture from './pictureComponent';
import NavBar from '../nav-bar';

class IndexComponent extends Component {
  constructor() {
    super()
    this.state = {

    };
    this.subscribe = this.subscribe.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  subscribe(){}
  handleForm(e) {

  }

  render(){
    return (
      <div>
        <NavBar handleForm={this.handleForm}/>
        <h1>EPB RESEARCH</h1>
        <button type='submit' className='button' onClick='/subscribe'>Subscribe</button>
        <Picture />
      </div>
    )
  }
}

export default IndexComponent;
