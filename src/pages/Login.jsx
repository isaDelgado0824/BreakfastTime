import React, { useContext, useState } from 'react'
import Context from '../context/Context'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigation = useNavigate()
  const { log, user, setUser } = useContext(Context)
  const [error, setError] = useState('');
  
  const login = (e) => {
    e.preventDefault();

    if (!user) {
      setError('User is required');
      return
    }

    setError('')
    log(user);
    navigation('/Breakfast', {replace: true})
  }

  return (
    <div className='page-container'>
      <div className='login-container'>
        <img src={`${process.env.PUBLIC_URL}/img/Login-card.jpg`} alt="Quote.jpg" />
        <div className='login-form'>
          <div className='info-container'>
            <h1>¡Welcome Back!</h1>
            <h2>To the best cousine in Ooo</h2>
            <p>(Sponsored by Breakfast Kingdom)</p>
          </div>
          <div className='input-container'>
            <label htmlFor="userName">User</label>
            <input id="userName" onChange={(e) => setUser(e.target.value.toUpperCase())} required/>
            {error && <p className='error'>{error}</p>}
            <button onClick={login}>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
