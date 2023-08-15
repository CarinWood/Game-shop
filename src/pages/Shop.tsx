import '../styles/shop.css'
import gameItems from '../data/Items.json'
import GameItem from '../components/gameItem.tsx/GameItem'


export const Shop = () => {
  return (
    <div className='shop-container'>
      {gameItems.map((item) => (
        <div key={item.id}>
          <GameItem _id={item.id} _title={item.title} _url={item.url} _price={item.price}/>
        </div>
      ))}
    </div>
  ) 
}
