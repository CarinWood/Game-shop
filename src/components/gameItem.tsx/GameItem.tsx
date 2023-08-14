import './gameItem.css'
import { FaHeart, FaRegHeart} from "react-icons/fa";
import { useState, useEffect } from 'react'
import { LargerImage } from '../largerImage/LargerImage';
import { useShoppingCart } from '../../contexts/ShoppingCartContext';



type gameItemProps = {
    title: string
    url: string
    price: number
}

const GameItem = ({title, url, price}: gameItemProps) => {

    const [favourite, isFavourite] = useState(false)
    const [openImage, setOpenImage] = useState(false)
    const {addToQuantity} = useShoppingCart()

    useEffect(() => {
        console.log(favourite)
    }, [favourite])

 

    const handleClickHeart = () => {
            isFavourite(!favourite)
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
                src={url} 
                alt={title} 
                onClick={() => openLargerImage()}
            />

            {/* price and title */}
     
            <p className='card-title'>{title}</p>
            <p className='card-price'>${price}</p>
       

            {/* add to cart button */}
            <button className='card-btn' onClick={addToQuantity}>Add to cart</button>

            {/* favourite heart */}
            {favourite ? <FaHeart className='card-fav red' onClick={() => handleClickHeart()}/>
            : <FaRegHeart className='card-fav' onClick={() => handleClickHeart()}/>
            }

        </article>

        {openImage && <LargerImage closeLargerImage={closeLargerImage} image={url}/>}

      
    </>
  )
}

export default GameItem