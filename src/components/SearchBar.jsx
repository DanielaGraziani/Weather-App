import React, {useState} from 'react'


export default function SearchBar({onSearch}) {

    const [city, setCity]= useState('')

    const handleInputChange=(e)=>{
      e.preventDefault()
      setCity(e.target.value)
      
    }
   

  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
        setCity('')
      }}>
        <input
          type="text"
          placeholder="Search..."
          className='rounded-md p-1'
          onChange={(e)=>handleInputChange(e)}
        />
        <button className='rounded-lg bg-yellow-300 text-white font-semibold p-1 ml-2' type="submit" value="Agregar">Add</button>
      </form>
    )
}
