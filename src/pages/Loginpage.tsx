import '../styles/loginpage.css'
import { Register } from '../components/register/Register'
import { useState, FC } from 'react'
import { Login } from '../components/login/Login'
import { Success } from '../components/Success'
import { Footer } from '../footer/Footer'
import { ConfettiComponent } from '../components/ConfettiComponent'



type Color = 'grey' | 'white'

type FooterProps = {
  color: Color;

}



export const Loginpage = () => {

  const [showLoginForm, setShowLoginForm]= useState<boolean>(true);
  const [successful, setSuccessful]= useState<boolean>(false);
  const [runConfetti, setRunConfetti] = useState<boolean>(false)




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
    <>
    {runConfetti && <ConfettiComponent/>}
    <div className='login-page'>
        {successful ? <Success handleBtnClick={handleBtnClick} />:
        <>{showLoginForm ? <Login showRegister={showRegister}/> : <Register showSuccess={showSuccess} showLogin={showLogin} setRunConfetti={setRunConfetti}/>}
        </>}
    
    </div>
    <Footer color="grey"/>
    </>
  )
}
