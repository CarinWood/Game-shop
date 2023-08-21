import './speechBubble.css'
import { useNavigate } from 'react-router-dom'
import { FC } from 'react'
import { useUserContext } from '../../contexts/UserContext'

interface Props {
    toggleBubbleFunc: () => void
}

export const SpeechBubble:FC<Props> = ({toggleBubbleFunc}) => {
    const {setShowLoginForm, user, setUser} = useUserContext()
    const navigate = useNavigate()
 


    

    const toLoginPage = () => {
        navigate('/login')
        toggleBubbleFunc()
        setShowLoginForm(true)
    }

    const toRegisterPage = () => {
        navigate('/login')
        toggleBubbleFunc()
        setShowLoginForm(false)

    }
   
    const toMemberPage = () => {
        navigate('/member')
        toggleBubbleFunc()

    }

    const logoutFunc = () => {
        setUser(null)
        navigate("/")
        toggleBubbleFunc()
    }

  return (
    <div className="widget-wrap">
        <div className="speech top">
            {user ?
            <>
            <div className='bubble-login-btn' onClick={toMemberPage}>My Page</div>
            <p className='create-text'>I want to <span onClick={logoutFunc}>Log out</span></p>
            </>
            : 
            <>
            <div className='bubble-login-btn' onClick={toLoginPage}>Sign in</div> 
            <p className='create-text'>Not a member yet? <span onClick={toRegisterPage}>Create account</span></p>
            </>
            }
        </div>
    </div>
  )
}
