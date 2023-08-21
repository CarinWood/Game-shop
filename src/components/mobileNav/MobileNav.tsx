import './mobileNav.css'
import { FaCartShopping } from "react-icons/fa6";
import { FC, useState, useRef, useEffect } from 'react'
import { useShoppingCart } from '../../contexts/ShoppingCartContext';
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { SpeechBubble } from '../speechBubble/SpeechBubble';
import { useUserContext } from '../../contexts/UserContext'

interface Props  {
    toggleCart: () => void
    toSearch: () => void
    toShop: () => void
    toLogin: () => void
}



export const MobileNav:FC<Props> = ({toggleCart, toSearch, toShop, toLogin}) => {
        const {setShowLoginForm} = useUserContext()
        const navigate = useNavigate()
        const {quantity } = useShoppingCart()
        const [toggleBubble, setToggleBubble] = useState<boolean>(false)
        let bubbleRef = useRef<HTMLDivElement>(null);


        const toggleBubbleFunc = () => {
          setToggleBubble(!toggleBubble)
   
        }

   

          
        useEffect(() => {
          let handler = (e: MouseEvent) => {
            if (bubbleRef.current && !bubbleRef.current.contains(e.target as Node)) {
              setToggleBubble(false);
            }
          };
      
          document.addEventListener("mousedown", handler);
      
          return () => {
            document.removeEventListener("mousedown", handler);
          };
        });


  return (
    <div className="mobile-nav">
        <div className='left-mobile-div'>
            <div className='mobile-logo' onClick={toShop}>The Game Shop</div>
        </div>

        <div className='right-mobile-div'>
        <div ref={bubbleRef} className={toggleBubble ? 'bubble visible': 'bubble invisible'}><SpeechBubble toggleBubbleFunc={toggleBubbleFunc}/></div>
          
            {/* user */}
            <p className='mobile-login-icon' onClick={toggleBubbleFunc}>
              <AiOutlineUser/>
            </p>

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
