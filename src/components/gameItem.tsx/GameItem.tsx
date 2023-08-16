import './gameItem.css'
import { FaHeart, FaRegHeart} from "react-icons/fa";
import { useState, useEffect } from 'react'
import { LargerImage } from '../largerImage/LargerImage';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';



type gameItemProps = {
    _title: string
    _url: string
    _price: number
    _id: number
}

const GameItem = ({_id, _title, _url, _price}: gameItemProps) => {

    const [favourite, isFavourite] = useState(false)
    const [openImage, setOpenImage] = useState(false)
    const {cart, setCart} = useShoppingCart()

   

 

    const handleClickHeart = () => {
            isFavourite(!favourite)
    }

    const openLargerImage = () => {
        setOpenImage(true)
    }
 
    const closeLargerImage = () => {
        setOpenImage(false)
    }

    const handleBuyButton = () => {
        console.log('handleBuyButton is clicked')
    
        const product = {
            id: _id,
            title: _title,
            url: _url,
            price: _price,
            quantity: 1
        }


        const productExists = cart.findIndex(item => item.id === _id)

        if(productExists !== -1) {
            setCart(prevCart => {
                const updatedCart = [...prevCart]
                updatedCart[productExists].quantity += 1
                return updatedCart
            })
        } else {
            setCart(prevCart => [...prevCart, product])
        }
       
    }





  return (
    <>
        <article className='card'>

            {/* image */}
            <img className='card-img' 
                src={_url} 
                alt={_title} 
                onClick={() => openLargerImage()}
            />

            {/* price and title */}
     
            <p className='card-title'>{_title}</p>
            <p className='card-price'>${_price}</p>
       

            {/* add to cart button */}
            <button className='card-btn' onClick={handleBuyButton}>Add to cart</button>

            {/* favourite heart */}
            {favourite ? <FaHeart className='card-fav red' onClick={() => handleClickHeart()}/>
            : <FaRegHeart className='card-fav' onClick={() => handleClickHeart()}/>
            }

        </article>

        {openImage && <LargerImage closeLargerImage={closeLargerImage} image={_url}/>}

      
    </>
  )
}

export default GameItem