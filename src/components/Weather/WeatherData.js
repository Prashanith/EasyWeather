import './Weather.css'

function WeatherData({data}) {
    
    return(
        <div className="info" >
            <div className="attr">
            { data['location']['localtime']}
            </div> 

            <div className="attr">
            { data['location']['name']}
            </div> 
            <div className="attr">
            {data['location']['region']}
            </div>

            <div className="attr">
            { data['location']['country']}
            </div> 

            <div className="attrTemp">
            <img src={data['current']['weather_icons'][0]} alt=""/>
            { data['current']['temperature']}<sup>°C</sup>
            </div> 

            <div className="attr">
            {data['location']['lat']+","+ data['location']['lon']}
            </div> 

            <div className="attr">
            { data['current']['weather_descriptions'][0] } 
            </div>   

            <div className="attr">
            { "Humidity :"+data['current']['humidity']+"%" }
            </div>

            <div className="attr">
            { "Precipitation :"+data['current']['precip']+"%" }
            </div>

            <div className="attr">
            { "WindSpeed :"+data['current']['wind_speed']+"km/h" }
            </div>
            <br/>               
        </div>
    );
}

export default WeatherData;