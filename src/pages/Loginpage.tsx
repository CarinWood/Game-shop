import '../styles/loginpage.css'
import { Register } from '../components/register/Register'
import { useState } from 'react'
import { Login } from '../components/login/Login'
import { Success } from '../components/Success'





export const Loginpage = () => {

  const [showLoginForm, setShowLoginForm]= useState<boolean>(false);
  const [successful, setSuccessful]= useState<boolean>(false);

  const showLogin = () => {
    setShowLoginForm(true)
  }

  const showRegister = () => {
    setShowLoginForm(false)
  }

  const showSuccess = () => {
    setSuccessful(true)
  
  }

  const handleBtnClick = () => {
      setSuccessful(false);
      setShowLoginForm(true);   
  }



  return (
    <div className='login-page'>
        {successful ? <Success handleBtnClick={handleBtnClick} />:
        <>{showLoginForm ? <Login showRegister={showRegister}/> : <Register showSuccess={showSuccess} showLogin={showLogin}/>}
        </>}
    </div>
  )
}
