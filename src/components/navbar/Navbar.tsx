import { useUserContext } from '../../contexts/UserContext'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import mariohead from '../../assets/images/mariohead.png'
import luigihead from '../../assets/images/luigihead.png'
import princesshead from '../../assets/images/princesshead.png'
import toadhead from '../../assets/images/toadhead.png'
import yoshihead from '../../assets/images/yoshihead.png'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useProfilePic } from '../../contexts/ProfilePicContext'
import { FaCartShopping } from "react-icons/fa6";
import { useShoppingCart } from '../../contexts/ShoppingCartContext'


export const Navbar = () => {

    const {user, setUser} = useUserContext()
    const {profilePic} = useProfilePic()

    const { open, quantity, setOpen } = useShoppingCart()

    const navigate = useNavigate()

    const toLogin = () => {
        navigate('/login')
        setUser(null)
        setOpen(false)
    }
  
    const toShop = () => {
        navigate('/shop')
        setOpen(false)
    }

    const toSearch = () => {
      setOpen(false)
      navigate('/search')
    }

    const imagePicker = () => {

      switch(profilePic) {
        case 'mario': return mariohead;
        case 'luigi': return luigihead;
        case 'princess': return princesshead;
        case 'yoshi': return yoshihead;
        case 'toad': return toadhead;
      }
     
      
    }

    const toggleCart = () => {
      setOpen(!open)
    }

   

  return (
    <nav>
          <div className='navbar-left'>
              <p className='logo' onClick={toShop}>The Game Shop</p>
          </div>
        
          <div className='navbar-right'>
              {user !== null ? 
              <div className='nav-profile'>
                  <div className='outer-circle'><div className='head-img'><img src={imagePicker()}/></div></div>
                  <p>{user} <span className='logout' onClick={toLogin}>(Logout)</span></p>
              </div>
              : <p className='login-link' onClick={toLogin}>Login</p>}
              <div onClick={toSearch}><HiOutlineMagnifyingGlass className='magn'/></div>
              <p className='cart-button' onClick={toggleCart}>
                <FaCartShopping/>
                <span className='digit'>{quantity}</span>
              </p>
          </div>
        
    </nav>
  )
}
