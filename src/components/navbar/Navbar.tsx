import { useUserContext } from '../../contexts/UserContext'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import mariohead from '../../assets/images/mariohead.png'
import luigihead from '../../assets/images/luigihead.png'
import princesshead from '../../assets/images/princesshead.png'
import toadhead from '../../assets/images/toadhead.png'
import yoshihead from '../../assets/images/yoshihead.png'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";
import { useShoppingCart } from '../../contexts/ShoppingCartContext'
import { MobileNav } from '../mobileNav/MobileNav'


export const Navbar = () => {

    const {user, setUser} = useUserContext()

    const { open, quantity, setOpen } = useShoppingCart()

    const navigate = useNavigate()

    const toLogin = () => {
        navigate('/login')
        setUser(null)
        setOpen(false)
    }
  
    const toShop = () => {
        navigate('/')
        setOpen(false)
    }

    const toSearch = () => {
      setOpen(false)
      navigate('/search')
    }

    const toMemberPage = () => {
      navigate('/member')
    }

    
    const toggleCart = () => {
      setOpen(!open)
    }

   

  return (
    <>
    <nav className='mobile'>
          <div className='navbar-left'>
              <p className='logo' onClick={toShop}>The Game Shop</p>
          </div>
        
          <div className='navbar-right'>
              {user !== null ? 
              <div className='nav-profile'>
                  
                  <p><span className='name' onClick={toMemberPage}>{user}</span> <span className='logout' onClick={toLogin}>(Sign out)</span></p>
              </div>
              : <p className='login-link' onClick={toLogin}>Sign in</p>}
              <div onClick={toSearch} className='search-text'>Search<HiOutlineMagnifyingGlass className='magn'/></div>
              <p className='cart-button' onClick={toggleCart}>
                <FaCartShopping/>
                <span className='digit'>{quantity}</span>
              </p>
          </div>
        
    </nav>
    <MobileNav toggleCart={toggleCart}/>
    </>
  )
}
