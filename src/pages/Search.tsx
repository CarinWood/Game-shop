import '../styles/search.css'
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

const Search = () => {
  return (
    <div className='search-container'>
      <form className='search-form'>
        <input 
          className='search-input'
          placeholder='What are you looking for?' 
        />
          <button type="submit" className='search-btn'>
            <HiOutlineMagnifyingGlass className='search-magnifyer'/>
          </button>
      </form>
    </div>
  )
}

export default Search
