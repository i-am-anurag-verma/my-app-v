import React from 'react'
import '../form/login.css'

const Login = () => {
  return (
    <div className='login-ctr'>
    <h2>Login to continue</h2>
    <form>
        <div className="login-ctr">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control"  id="email" name="email" />
        </div>
        <div className="login-ctr">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" name="password" id="password" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
  )
}

export default Login