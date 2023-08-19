import './mobileNav.css'
import { FaCartShopping } from "react-icons/fa6";
import { FC } from 'react'
import { useShoppingCart } from '../../contexts/ShoppingCartContext';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

interface Props  {
    toggleCart: () => void
    toSearch: () => void
    toShop: () => void
    toLogin: () => void
}



export const MobileNav:FC<Props> = ({toggleCart, toSearch, toShop, toLogin}) => {
        const navigate = useNavigate()
        const {quantity } = useShoppingCart()




  return (
    <div className="mobile-nav">
        <div className='left-mobile-div'>
            <div className='mobile-logo' onClick={toShop}>The Game Shop</div>
        </div>

        <div className='right-mobile-div'>

            {/* user */}
            <p className='mobile-login-icon' onClick={toLogin}><AiOutlineUser/></p>

            {/* search */}
            <p className='mobile-search-logo' onClick={toSearch}><HiOutlineMagnifyingGlass/></p>


            {/* cart button */}
        <p className='cart-button' onClick={toggleCart}>
                <FaCartShopping/>
                <span className='digit'>{quantity}</span>
              </p>

        </div>
    </div>
  )
}
