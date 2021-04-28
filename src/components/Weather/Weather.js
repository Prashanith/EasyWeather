/* eslint-disable no-unused-vars */
import './Weather.css'
import { useState } from 'react'
import useFetch from '../../FetchData/fetchdata';
import WeatherData from './WeatherData';

function Weather() {
    const [city, setCity] = useState(null)
    const [cityName, setCityName] = useState('')    
    const {data,error} = useFetch(city)

    const searchCity=(e)=>{
      e.preventDefault();
      setCity(cityName);      
    }   
        
    return (      
      <div className="weather">
      <button  onClick={ ()=>setCity(null) } className="btnStyle">Weather at my place</button>
      <form method="post" onSubmit={ searchCity } className="searchCity">
        <label htmlFor="cityName"></label>
        <input 
        type="text" 
        required
        value={cityName}
        placeholder="search a place"
        onChange={ (e)=>setCityName(e.target.value) }
        />
        <input type="submit" value="SEARCH"/>
      </form>
      <div className="weatherData">
      {           
        data?        
          (
            (data.success===undefined)?
            <WeatherData data={data}/>

            :<div className="errorInfo">{ data['error']['info']}</div>
          )
          :<div>Loading...</div>
         
       }
       {
         error && <div>{error}</div>
       }
      </div>
            
      </div>
    );
  }
  
  export default Weather;