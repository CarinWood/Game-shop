import { FaEye, FaEyeSlash } from "react-icons/fa"
import React, { FC, useState } from 'react'
import applause from '../../assets/sound/applause.wav'



interface Props {
    showLogin: () => void
    showSuccess: () => void
    setRunConfetti: React.Dispatch<React.SetStateAction<boolean>>
}

export const Register:FC<Props> = ({showLogin, showSuccess, setRunConfetti}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [hasSpaces, setHasSpaces] = useState<boolean>(false)
    const [isNotEqual, setIsNotEqual] = useState<boolean>(false)


    


   

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       if(password === confirmPassword) {
        new Audio(applause).play()
        setRunConfetti(true)
        setTimeout(() => {
            setRunConfetti(false)
        }, 4000)
     
            setIsNotEqual(false)
            showSuccess()
           localStorage.setItem("_username", username)
           localStorage.setItem("_email", email)
           localStorage.setItem("_password", password)

           
         
       } else {
            setIsNotEqual(true)
            setPassword('')
            setConfirmPassword('')    
       }
    }

    const togglePassword = () => {
            setHidePassword(!hidePassword) 
    }

    const toggleConfirmPassword = () => {
        setHideConfirmPassword(!hideConfirmPassword)
    }

    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value)
    }
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
            setIsNotEqual(false)
            setPassword(e.target.value)
    }
    const changeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsNotEqual(false)
            setConfirmPassword(e.target.value)
    }
    const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
            const userInput = e.target.value
            if(userInput.includes(' ')) {
                setHasSpaces(true)
                return
            } else {
                setHasSpaces(false)
                setUsername(e.target.value)
            }
           
    }
  
    
  return (
    <>
    <div className="container register-container">
        <p>Create an account</p>
        <form className='register-form form' onSubmit={handleSubmit}>

            <div>
                <label htmlFor="username">Username:</label>
                {hasSpaces && <span className="warning">Cannot contain spaces!</span>}
                <input name="username"
                required 
                value={username}
                onChange={changeUsername}
                maxLength={10}
                />
            </div>

           

            <div>
                <label className="form-label">Email:</label>
                <input 
                    required
                    type="email" 
                    value={email}
                    onChange={changeEmail}
                />
            </div>

            <div>
                {isNotEqual && <span className="not-equal">Passwords don't match!</span>}
                <label className="form-label">Password:</label>
                <input 
                    required
                    type={hidePassword ? "password" : "text"} 
                    value={password}
                    onChange={changePassword}
                />
                <span className='eye' onClick={togglePassword}>
                   {hidePassword ? <FaEyeSlash/>:<FaEye/>} 
                </span>
            </div>  
            <div>
                <label className="form-label">Confirm password:</label>
                <input 
                    required
                    type={hideConfirmPassword ? 'password' : 'text'} 
                    value={confirmPassword}
                    onChange={changeConfirmPassword}
                />
                <span className='eye' onClick={toggleConfirmPassword}>
                   {hideConfirmPassword ? <FaEyeSlash/>:<FaEye/>} 
                </span>
                
            </div>  

            
                <button type="submit">Submit</button>
           
        </form>
        
        <p className='small-text login-register-text'>Already a member? <span onClick={showLogin}>Log in</span></p>
    </div>
   
    </>
  )
}
