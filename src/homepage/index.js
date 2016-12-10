import Inferno from 'inferno';
import Component from 'inferno-component';
import Picture from './pictureComponent';
class IndexComponent extends Component {
  constructor() {
    super()

  this.subscribe = this.subscribe.bind(this)  ;
  }

  subscribe(){
    console.log('subscribe button was clicked');
  }
  componentDidMount(){

  }
  render(){
    return (
      <div>
        <h1>EPB RESEARCH</h1>
        <button type='submit' onClick={this.subscribe}>Subscribe</button>
        <Picture />
      </div>
    )
  }
}

export default IndexComponent;
