import React from "react";
import { Link } from 'react-router-dom';
import {GrClose} from 'react-icons/gr'

function Card({ max, min, name, img, onClose, id }) {
  return (
    
      <div className=" grid max-w-[1040px] mt-12 ml-8 w-60 border shadow-xl hover:opacity-90">
        <div className="flex mt-2 ml-52"> 
        <button className="bg-red-400 text-gray-300 p-1" onClick={onClose}>
        <GrClose/>
        </button>
        </div>
        <figure>
          <img
            className="ml-[70px]"
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="weather"
          />
        </figure>
        <div className="bg-yellow-300 p-3">
        <Link to={`/ciudad/${id}`}>
          <h2 className="text-2xl text-black text-center">{name}</h2>
        </Link>
          <div className="flex justify-around mt-2">
            <span className="text-gray-800 font-medium">
              Max <h2 className="text-black text-xl">{max}°</h2>
            </span>
            <span className="text-gray-800 font-medium">
              Min <h2 className="text-black text-xl">{min}°</h2>
            </span>
          </div>
        </div>
      </div>
  
  );
}

export default Card;
