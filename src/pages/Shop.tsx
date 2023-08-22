import '../styles/shop.css'
import gameItems from '../data/Items.json'
import GameItem from '../components/gameItem.tsx/GameItem'
import { Footer } from '../footer/Footer'
import { useEffect } from 'react'


export const Shop = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <div className='shop-container'>
      {gameItems.map((item) => (
        <div key={item.id}>
          <GameItem _id={item.id} _title={item.title} _url={item.url} _price={item.price}/>
        </div>
      ))}
      <Footer color="white"/>
    </div>
  ) 
}
