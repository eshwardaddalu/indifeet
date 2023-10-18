import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Search = () => {
  return (
    <div className="searchpage">
      <div className="search1">
            {/* <h4>INDIFEET</h4> */}
            <input type="text"  placeholder="Search" />
            {/* <button>Enter</button> */}
            <div className="search1-icon"><FontAwesomeIcon className=""  icon={faSearch} color="black" /></div>

          </div>
      </div>
   
  )
}

export default Search
