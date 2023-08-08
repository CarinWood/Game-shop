import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FC, useState } from 'react'

interface Props {
    showLogin: () => void
}

export const Register:FC<Props> = ({showLogin}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true);

    const handleSubmit = () => {
       
    }

    const togglePassword = () => {
            setHidePassword(!hidePassword) 
    }

    const toggleConfirmPassword = () => {
        setHideConfirmPassword(!hideConfirmPassword)
    }
  
 

  return (
    <>
    <div className="container">
        <p>Create an account</p>
        <form className='register-form' onSubmit={handleSubmit}>

            <div>
                <label htmlFor="username">Username:</label>
                <input name="username" placeholder='Username'/>
            </div>

           

            <div>
                <label>Email:</label>
                <input type="email" placeholder="example@mail.com"></input>
            </div>

            <div>
                <label>Password:</label>
                <input 
                    type={hidePassword ? "password" : "text"} 
                    placeholder="********" 
                />
                <span className='eye' onClick={togglePassword}>
                   {hidePassword ? <FaEyeSlash/>:<FaEye/>} 
                </span>
            </div>  
            <div>
                <label>Confirm password:</label>
                <input 
                    type={hideConfirmPassword ? 'password' : 'text'} 
                    placeholder="*****"
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
