import React from 'react';
import {BiRevision} from 'react-icons/bi';

const SearchBar = ({ setSearchKey, refreshHandler}) => {
  return (
    <div className='SearchBar'>
        <input type="search" name="search" placeholder='Search a crypto' onChange={(e)=>setSearchKey(e.target.value)}/>
        <span><BiRevision onClick={()=>refreshHandler()}/></span>
    </div>
  ) 
}

export default SearchBar