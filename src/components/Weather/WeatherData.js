import './Weather.css'

function WeatherData({data}) {
    
    return(
        <div className="info" >
            {/* <div className="attr">
            { data['location']['localtime']}
            </div>  */}

            <div className="attr">
            { data['name']+","+data['sys']['country']}
            </div> 
           

            <div className="attr">
            <img 
            height="8"
            src={`https://flagcdn.com/16x12/${data['sys']['country'].toLowerCase()}.png`}          
            
            alt={ data['sys']['country']}></img>
            
            </div> 

            <div className="attrTemp">
            <img src={ `http://openweathermap.org/img/wn/${data['weather'][0]['icon']}@2x.png`        } alt=""/>
            { data['main']['temp']}<sup>°C</sup>
            </div> 

            <div className="attr">
            { "Feels Like "+data['main']['feels_like']}<sup>°C</sup>
            </div> 


            <div className="attr">
            {data['coord']['lat']+","+ data['coord']['lon']}
            </div> 

            <div className="attr">
            { data['weather'][0]['main']+","+data['weather'][0]['description'] } 
            </div>   

            <div className="attr">
            { "Humidity :"+data['main']['humidity']+"%" }
            </div>

            {/* <div className="attr">
            { "Precipitation :"+data['current']['precip']+"%" }
            </div> */}

            <div className="attr">
            { "WindSpeed :"+data['wind']['speed']+"km/h" }
            </div>

            <div className="attr">
            { "Pressure :"+data['main']['pressure']+"hPa"}
            </div> 
            <br/>               
        </div>
    );
}

export default WeatherData;