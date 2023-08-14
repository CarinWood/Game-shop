import './gameItem.css'
import { FaHeart, FaRegHeart} from "react-icons/fa";
import { useState, useEffect } from 'react'


type gameItemProps = {
    title: string
    url: string
}

const GameItem = ({title, url}: gameItemProps) => {

    const [favourite, isFavourite] = useState(false)

    useEffect(() => {
        console.log(favourite)
    }, [favourite])

 

    const handleClickHeart = () => {
            isFavourite(!favourite)
    }



  return (
    <>
        <article className='card'>
            <img className='card-img' src={url} alt={title}/>
            <p className='card-title'>{title}</p>
            <button className='card-btn'>Add to cart</button>
            {favourite ? <FaHeart className='card-fav red' onClick={() => handleClickHeart()}/>
            : <FaRegHeart className='card-fav' onClick={() => handleClickHeart()}/>
            }
        </article>

      
    </>
  )
}

export default GameItem