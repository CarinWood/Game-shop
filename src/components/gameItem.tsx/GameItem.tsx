import './gameItem.css'
import { FaHeart, FaRegHeart} from "react-icons/fa";
import { useState, useEffect } from 'react'
import { LargerImage } from '../largerImage/LargerImage';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';
import { useWishList } from '../../contexts/WishlistContext';



type gameItemProps = {
    _title: string
    _url: string
    _price: number
    _id: number
}

const GameItem = ({_id, _title, _url, _price}: gameItemProps) => {

    const [favourite, isFavourite] = useState(false)
    const [openImage, setOpenImage] = useState(false)
    const {cart, setCart, handlePlus} = useShoppingCart()
    const { wishList, setWishList } = useWishList()

   useEffect(() => {
        toggleHeart()
   }, [wishList])


   const toggleHeart = () => {
    const productExists = wishList.findIndex(item => item.id === _id)

    if(productExists !== -1) {
        isFavourite(true)
    } else {
      isFavourite(false)
    }


    }
   

 

    const addToWishList = () => {
            isFavourite(true)

            const product = {
                id: _id,
                title: _title,
                url: _url,
                price: _price,
                quantity: 1
            }

          

            const productExists = wishList.findIndex(item => item.id === _id)

            if(productExists !== -1) {
                return
            } else {
                setWishList(prevWishList => [...prevWishList, product])
            }
        
    }

    const deleteFromWishList = () => {
   
        setWishList(wishList.filter((prevItem) => prevItem.id !== _id))
    }

    const openLargerImage = () => {
        setOpenImage(true)
    }
 
    const closeLargerImage = () => {
        setOpenImage(false)
    }

    const handleBuyButton = () => {
    
        const product = {
            id: _id,
            title: _title,
            url: _url,
            price: _price,
            quantity: 1
        }


        const productExists = cart.findIndex(item => item.id === _id)

        if(productExists !== -1) {
            handlePlus(_id)
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
            {favourite ? <FaHeart className='card-fav red' onClick={() => deleteFromWishList()}/>
            : <FaRegHeart className='card-fav' onClick={() => addToWishList()}/>
            }

        </article>

        {openImage && <LargerImage closeLargerImage={closeLargerImage} image={_url}/>}

      
    </>
  )
}

export default GameItem