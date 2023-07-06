import { BiSearch } from 'react-icons/bi'
import { useState } from 'react'
import './Search.css'

const Search = ( ) => {
  const [search, setSearch] = useState('')
  return (
    <div className="search-container">
			<BiSearch size='20' color='#fff'/>
			<input onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder='Search for food, coffe, etc..' value={search} />
		</div>
  )
}

export default Search