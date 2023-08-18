import { useShoppingCart } from '../../contexts/ShoppingCartContext'
import { useWishList } from '../../contexts/WishlistContext'
import { LargerImage } from '../largerImage/LargerImage';
import './wishItem.css'
import { useState, useEffect } from 'react'
import { FaHeart, FaRegHeart} from "react-icons/fa";
import { RiCloseCircleFill } from "react-icons/ri";


type wishItemProps = {
    _title: string
    _url: string
    _price: number
    _id: number
}

export const WishItem = ({_id, _title, _url, _price}: wishItemProps) => {

    const [favourite, isFavourite] = useState(false)
    const [openImage, setOpenImage] = useState(false)
    const {cart, setCart, handlePlus} = useShoppingCart()
    const { wishList, setWishList } = useWishList()

    useEffect(() => {
        console.log(wishList)
       }, [favourite])
    
    
       const deleteFromWishList = () => {
        isFavourite(false)
        setWishList(wishList.filter((prevItem) => prevItem.id !== _id))
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


    const openLargerImage = () => {
        setOpenImage(true)
    }
 
    const closeLargerImage = () => {
        setOpenImage(false)
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
            
             <RiCloseCircleFill className='card-fav closeIcon' onClick={() => deleteFromWishList()}/>
            

        </article>

        {openImage && <LargerImage closeLargerImage={closeLargerImage} image={_url}/>}

      
    </>
  )
}
