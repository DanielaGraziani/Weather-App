import React from "react";
import {useParams} from 'react-router-dom'

export default function City({ onFilter }){
  const {ciudadId}= useParams()
  const city= onFilter(ciudadId)
console.log(city);
    return(
      city ? 
       ( <div className="max-w-[660px] border mt-44 flex place-content-evenly text-center w-[100%] m-auto p-8  bg-[#998e8e62]">
            <h2 className="font-semibold text-4xl text-white mt-4">{city.name}</h2>
            <div>
                <div className=" text-white text-xl">Temperature: {city.temp}</div>
                <div className=" text-white text-xl">Wind: {city.wind}</div>
                <div className=" text-white text-xl" >Cloudiness: {city.clouds}</div>
            </div>
            <div>

                <div className="mt-6 rotate-90 font-semibold text-2xl text-white">{city.weather}</div>
            </div>
        </div>)
      
      :
      <p>Cities not found</p>
    )
}