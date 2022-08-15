import React from 'react'
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'

export default function Nav({onSearch}) {
  return (
  <div className="flex mt-4 justify-between">
  <div>
    <Link to='/'>
    <a className="btn btn-ghost normal-case md:text-2xl text-white md:font-semibold ">Weather App</a>
    </Link>
  </div>
  <div className="">
    <div>
   <SearchBar onSearch={onSearch}/>
    </div>
  </div>
</div>
  )
}
