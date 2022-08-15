import React from 'react'
import Card from './Card'

function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='flex flex-wrap justify-center'>
        {cities.map(c => <Card
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            id={c.id}
          /> )}
      </div>
    );
  } else {
    return(
      <div>no cities</div>
    )
  }
}

export default Cards