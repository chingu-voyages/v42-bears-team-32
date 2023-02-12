import React, {useState} from 'react'
import { loginUser } from '../../store/authSlice'

import {  useDispatch } from 'react-redux'
import './Auth.styles.css'


const Login = () => {
  const [creds, setCreds] = useState({
    email: '',
    password: ''
  })

  const dispatch = useDispatch()



  const handleChange = (e) => setCreds(prev => ({...prev, [e.target.name]: e.target.value}))


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(creds))
  }

  return (
    <div className='form-container'>
      <form className='form'>
        <div className='header'>
          <h2>Welcome Back</h2>
          <h4>Log in to your account using email and password</h4>
        </div>
        <input value={creds.email} onChange={handleChange} name='email' className='form-field' type='email' placeholder='email' />
        <input value={creds.password} onChange={handleChange} name='password' className='form-field' type='password' placeholder='password' />
        <button onClick={handleSubmit}>LOGIN</button>
      </form>
      <p>You do have an account? Login</p>
    </div>
  )
}

export default Login
