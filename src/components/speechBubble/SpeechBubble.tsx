import './speechBubble.css'
import { useNavigate } from 'react-router-dom'
import { FC } from 'react'
import { useUserContext } from '../../contexts/UserContext'

interface Props {
    toggleBubbleFunc: () => void
}

export const SpeechBubble:FC<Props> = ({toggleBubbleFunc}) => {
    const {setShowLoginForm} = useUserContext()
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

  return (
    <div className="widget-wrap">
        <div className="speech top">
            <div className='bubble-login-btn' onClick={toLoginPage}>Log in</div> 
            <p className='create-text'>Not a member yet? <span onClick={toRegisterPage}>Create account</span></p>
        </div>
    </div>
  )
}
