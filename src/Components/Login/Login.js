import "./login.css";

const Login = () => {
  return (
    
    <div class="login-box">
    <h2>Login</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required="true"/>
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required=""/>
        <label>Password</label>
      </div>
      <a href="#">
        
        Submit
      </a>
    </form>
  </div>

  );
};

export default Login;
