import Inferno from 'inferno';

const Login = props =>
    <div className='login-container'>
      <form type='submit' onSubmit='props.handleForm'>
        <label>Username <input type='text' className='log-in' id='username' placeholder='username'/></label>
        <label>Password <input type='password' className='log-in' id='password' placeholder='password'/></label>
        <button type='submit' className='button' onClick={props.handleForm}>Log In</button>
      </form>
  </div>

export default Login;
