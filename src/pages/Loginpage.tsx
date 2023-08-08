import '../styles/loginpage.css'
import { Register } from '../components/register/Register'
import { useState } from 'react'
import { Login } from '../components/login/Login'


export const Loginpage = () => {

  const [showLoginForm, setShowLoginForm]= useState<boolean>(false);

  const showLogin = () => {
    setShowLoginForm(true)
  }

  const showRegister = () => {
    setShowLoginForm(false)
  }



  return (
    <div className='login-page'>
        {showLoginForm ? <Login showRegister={showRegister}/> : <Register showLogin={showLogin}/>}
        
    </div>
  )
}
