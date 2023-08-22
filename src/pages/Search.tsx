import '../styles/search.css'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import itemData from '../data/Items.json'
import { useState, useEffect } from 'react'
import GameItem from '../components/gameItem.tsx/GameItem';
import { Footer } from '../footer/Footer';
import { GrFormClose } from "react-icons/gr";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value)
      
  }

  const erase = () => {
      setSearchTerm('')
  }
 
  return (
    <>
    <div className='search-container'>
      <form className='search-form'>
        {searchTerm.length > 0 && <p className='close-icon' onClick={erase}><GrFormClose/></p>}
        <input 
          className='search-input'
          placeholder='What are you looking for?' 
          value={searchTerm}
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
            <Footer color={"white"} />
    </>
  )
}

export default Search
