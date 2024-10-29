"use client";

import Image from 'next/image';
import { useState } from 'react';
import React from 'react'
import SearchManufacturer from './SearchManufacturer';
import { warnOptionHasBeenDeprecated } from 'next/dist/server/config';

const SearchButton = ({ otherClasses} : 
  { otherClasses : string})=>(
  <button type = "submit" className={`-ml-3 z-10 
  ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
      />
      

  </button>
)

const SearchBar = () => {
    const [manufacturer, setManufacturer]=useState ('');
    const handleSearch = () =>[]
  return (
    <form className="searchbar" 
    onSubmit={handleSearch}>

        <div className='searchbar__item'>
            <SearchManufacturer 
            manufacturer = {manufacturer}
            setManufacturer = {setManufacturer}
            />
            <SearchButton otherClasses="sm:hidden" />
        </div>
    </form>
  )
}

export default SearchBar