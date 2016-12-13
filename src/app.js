import Inferno from 'inferno';
import Component from 'inferno-component';
import NavBar from './nav-bar';
import IndexComponent from './homepage/index';
class AppComponent extends Component {
  constructor() {
    super()
    this.state = {};


    this.subscribe = this.subscribe.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  subscribe(){}
  handleForm(e) {}

  render(){
    return (
      <div>
      <div>
        <NavBar />
      </div>
        <div className='home-container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default AppComponent;
