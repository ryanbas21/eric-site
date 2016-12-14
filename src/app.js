import Inferno from 'inferno';
import Component from 'inferno-component';
import NavBar from './nav-bar';
import IndexComponent from './homepage/index';
class AppComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {};


    this.subscribe = this.subscribe.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  subscribe(){

  }
  handleForm(e) {

  }
  componentDidMount(){
    // console.log(this.props,'mounted');
  }
  render(props){
    console.log(this.props.children);
    let children = this.props.children.map(child => Inferno.cloneElement(child) );
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
