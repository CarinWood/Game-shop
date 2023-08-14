import { UserContext } from '../../contexts/UserContext'
import './navbar.css'
import { useContext } from 'react'
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

    const [user, setUser] = useContext(UserContext)
    const {profilePic} = useProfilePic()

    const { openCart, open, quantity } = useShoppingCart()

    const navigate = useNavigate()

    const toLogin = () => {
        navigate('/login')
        setUser(null)
    }
  
    const toShop = () => {
        navigate('/shop')
     
    }

    const toSearch = () => {
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

   

  return (
    <nav>
        <p className='logo' onClick={toShop}>The Game Shop</p>
        
          <div className='navbar-right'>
              {user !== null ? 
              <div className='nav-profile'>
                  <div className='outer-circle'><div className='head-img'><img src={imagePicker()}/></div></div>
                  <p>{user} <span className='logout' onClick={toLogin}>(Logout)</span></p>
              </div>
              : <p className='login-link' onClick={toLogin}>Login</p>}
              <div onClick={toSearch}><HiOutlineMagnifyingGlass className='magn'/></div>
              <p className='cart-button' onClick={openCart}>
                <FaCartShopping/>
                <span className='digit'>{quantity}</span>
              </p>
          </div>
        
    </nav>
  )
}
