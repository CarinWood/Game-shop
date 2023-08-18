import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { FC, useState } from 'react';
import applause from '../../assets/sound/applause.wav'

interface Props {
    showLogin: () => void
    showSuccess: () => void
}

export const Register:FC<Props> = ({showLogin, showSuccess}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
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
    <div className="container">
        <p>Create an account</p>
        <form className='register-form form' onSubmit={handleSubmit}>

            <div>
                <label htmlFor="username">Username:</label>
                {hasSpaces && <span className="warning">Cannot contain spaces!</span>}
                <input name="username"
                required 
                placeholder='Username'
                value={username}
                onChange={changeUsername}
                maxLength={10}
                />
            </div>

           

            <div>
                <label>Email:</label>
                <input 
                    required
                    type="email" 
                    placeholder="example@mail.com"
                    value={email}
                    onChange={changeEmail}
                />
            </div>

            <div>
                {isNotEqual && <span className="not-equal">Passwords don't match!</span>}
                <label>Password:</label>
                <input 
                    required
                    type={hidePassword ? "password" : "text"} 
                    placeholder="********" 
                    value={password}
                    onChange={changePassword}
                />
                <span className='eye' onClick={togglePassword}>
                   {hidePassword ? <FaEyeSlash/>:<FaEye/>} 
                </span>
            </div>  
            <div>
                <label>Confirm password:</label>
                <input 
                    required
                    type={hideConfirmPassword ? 'password' : 'text'} 
                    placeholder="********"
                    value={confirmPassword}
                    onChange={changeConfirmPassword}
                />
                <span className='eye' onClick={toggleConfirmPassword}>
                   {hideConfirmPassword ? <FaEyeSlash/>:<FaEye/>} 
                </span>
                
            </div>  

            
                <button type="submit">Submit</button>
           
        </form>
        
        <p className='small-text'>Already a member? <span onClick={showLogin}>Log in</span></p>
    </div>
   
    </>
  )
}
