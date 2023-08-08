import { FC,useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface Props {
    showRegister: () => void
}


export const Login:FC<Props> = ({showRegister}) => {

    const [hidePassword, setHidePassword] = useState(true)

    const togglePassword = () => {
        setHidePassword(!hidePassword) 
}

  return (
    <div className='container'>
        <p>Login</p>
        <form>
            <div className='login-div'>
                <label htmlFor="username">Username:</label>
                <input name="username" placeholder='Username'/>
            </div>

            <div className='login-div'>
                <label>Password:</label>
                <input 
                    type={hidePassword ? "password" : "text"} 
                    placeholder="********" 
                />
                <span className='eye' onClick={togglePassword}>
                   {hidePassword ? <FaEyeSlash/>:<FaEye/>} 
                </span>
            </div>
            <button>Sign in</button>
        </form>
        <p className='small-text'>Don't have an account? <span onClick={showRegister}>Create account</span></p>
    </div>
  )
}
