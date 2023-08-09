import { FC,useState, useEffect, useContext } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext';


interface Props {
    showRegister: () => void
}


export const Login:FC<Props> = ({showRegister}) => {
    const [user, setUser] = useContext(UserContext)
    const [hidePassword, setHidePassword] = useState(true)
    const [password, setPassword] = useState<string | null>('')
    const [username, setUsername] = useState<string | null>('')
    const [typedPass, setTypedPass] = useState<string>('')
    const [typedName, setTypedName] = useState<string>('')
    const navigate = useNavigate()

    useEffect(() => {
        setUsername(localStorage.getItem("_username"))
        setPassword(localStorage.getItem("_password"))
    }, [])

    const togglePassword = () => {
        setHidePassword(!hidePassword) 
}

const handleTypedName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTypedName(e.target.value)
}
const handleTypedPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTypedPass(e.target.value)
}

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(username === typedName && password === typedPass) {
        setUser(username)
        navigate('/member')
    } else {
        alert('you failed!!!!')
    }
}

  return (
    <div className='container'>
        <p>Login</p>
        <form onSubmit={handleSubmit}>
            <div className='login-div'>
                <label htmlFor="username">Username:</label>
                <input 
                    required
                    name="username" 
                    placeholder='Username'
                    value={typedName}
                    onChange={handleTypedName}
                />
            </div>

            <div className='login-div'>
                <label>Password:</label>
                <input 
                    required
                    type={hidePassword ? "password" : "text"} 
                    placeholder="********" 
                    value={typedPass}
                    onChange={handleTypedPassword}
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
