import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import { registerUser } from '../../features/Auth/authSlice'



const Register = () => {
  const [creds, setCreds] = useState({
    email: '',
    password: '',
    name: ''
  })

  const dispatch = useDispatch(); 

  


  const handleChange = (e) => setCreds(prev => ({...prev, [e.target.name]: e.target.value}))


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(creds))
  }


  return (
    <div className="form-container" >
  <form className="form">
    <div className="header">
      <h2>Welcome Back</h2>
      <h4>Log in to your account using email and password</h4>
    </div>
    <input onChange={handleChange} value={creds.name} name='name' className="form-field" type="text" placeholder="display name" />
    <input onChange={handleChange} value={creds.email} name='email' className="form-field" type="email" placeholder="email" />
    <input onChange={handleChange} name='password' className="form-field" type="password" placeholder="password" />
    <button onClick={handleSubmit} value={creds.password} type="submit">LOGIN</button>
  </form>
  <p>You do have an account? Login</p>
</div>
  )
}

export default Register