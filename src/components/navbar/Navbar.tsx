import { UserContext } from '../../contexts/UserContext'
import './navbar.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import mariohead from '../../assets/images/mariohead.png'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export const Navbar = () => {

    const [user, setUser] = useContext(UserContext)
    const navigate = useNavigate()

    const toLogin = () => {
        navigate('/login')
        setUser(null)
    }

    const toSearch = () => {
      navigate('/search')
    }

  return (
    <nav>
        <p>The Game Shop</p>
        
          <div className='navbar-right'>
              {user !== null ? 
              <div className='nav-profile'>
                  <div className='outer-circle'><div className='head-img'><img src={mariohead}/></div></div>
                  <p>{user} <span className='logout' onClick={toLogin}>(Logout)</span></p>
              </div>
              : <p className='login-link' onClick={toLogin}>Login</p>}
              <div onClick={toSearch}><HiOutlineMagnifyingGlass className='magn'/></div>
          </div>
        
    </nav>
  )
}
