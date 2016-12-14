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

  subscribe(){

  }
  handleForm(e) {

  }
  componentDidMount(){
    console.log(this.props,'mounted');
  }
  render(){
    console.log(this.props);
    let children = this.props.children.map(child =>  Inferno.cloneVNode(child) );
    return (
      <div>
      <NavBar />
        <div className='home-container'>
          {children}
        </div>
      </div>
    )
  }
}

export default AppComponent;
