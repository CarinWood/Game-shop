import '../styles/search.css'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import itemData from '../data/Items.json'
import { useState } from 'react'
import GameItem from '../components/gameItem.tsx/GameItem';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value)
  }
 
  return (
    <div className='search-container'>
      <form className='search-form'>
        <input 
          className='search-input'
          placeholder='What are you looking for?' 
          onChange={handleSearch}
        />
       
            <HiOutlineMagnifyingGlass className='search-magnifyer'/>
       
      </form>

      <div className='search-result'>
          {itemData.filter((val) => {
            if(val.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return val;
            } 
          }).map((item) => {
            return<div key={item.id}> {searchTerm === '' ? '' : <GameItem _id={item.id} _title={item.title} _url={item.url} _price={item.price}/>}</div>
          })}
      </div>

    </div>
  )
}

export default Search
