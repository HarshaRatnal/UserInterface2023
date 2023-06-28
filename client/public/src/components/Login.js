const Login = () =>{
    return(
        <div>
         <form className = "login-form">

        <div className="mb-3">
          <label For="username" className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            id="username"
            name='username'
            required
          />
          </div>
          
       
        <div className="mb-3">
          <label For="password" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password"
            name='password'
            required
          />
        </div>

       
        <input type="submit" className="btn btn-primary" value="login"/>
        </form>
        </div>
    );
}
export default Login;