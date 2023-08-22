import '../styles/loginpage.css'
import { Register } from '../components/register/Register'
import { useState, FC, useEffect } from 'react'
import { Login } from '../components/login/Login'
import { Success } from '../components/Success'
import { Footer } from '../footer/Footer'
import { ConfettiComponent } from '../components/ConfettiComponent'
import { useUserContext } from '../contexts/UserContext'



type Color = 'grey' | 'white'

type FooterProps = {
  color: Color;

}



export const Loginpage = () => {

  const {showLoginForm, setShowLoginForm} = useUserContext()
  const [successful, setSuccessful]= useState<boolean>(false);
  const [runConfetti, setRunConfetti] = useState<boolean>(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const showLogin = () => {
    setShowLoginForm(true)
  }

  const showRegister = () => {
    setShowLoginForm(false)
  }

  const showSuccess = () => {
    setSuccessful(true)
    window.scrollTo(0,0)
  
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
