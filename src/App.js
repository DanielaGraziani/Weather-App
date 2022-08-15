import React, {useState} from "react";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import City from "./components/City";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  
  const [cities, setCities] = useState([])
  const apiKey= 'd1a554ccfa4ee8b4ffc4283e062ef27a'

  function onSearch(ciudad) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
    }

  const onClose=(id)=>{
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    
    <div className="max-w-[1040px] mx-auto grid">
        <Nav onSearch={onSearch}/>
       <Routes>
        <Route exact path='/' element={<Cards cities={cities} onClose={onClose} />}/>
        <Route exact path='/ciudad/:ciudadId' element={<City onFilter={onFilter}/>}/>
       </Routes>
    </div>
  );
}

export default App;
