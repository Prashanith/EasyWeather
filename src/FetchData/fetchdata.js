import { useState,useEffect } from 'react' 

const useFetch =(city)=>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);  

    // const APIKey='d48141cb9d0d8f3b9ef1c98ffd970dfe';
    const APIKey='158bb7e56aa3c63848f9de17b64d32c7';

    useEffect(() => {
      const abortCont= new AbortController();

      //getgeodata requests weather information for current location
      // `http://api.weatherstack.com/current?access_key=${APIKey}&query=${latitude+","+longitude}`
      if(!city){        
        if (navigator.geolocation) {
          let longitude=null;
          let latitude=null        
          navigator.geolocation.getCurrentPosition((position)=>{         
            latitude= position.coords.latitude;
            longitude= position.coords.longitude;      
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKey}&units=metric`,
              { signal: abortCont.signal}
            )
            .then(res => {                
              if (!res.ok) { 
                throw Error('could not fetch the data for that resource');
              } 
              return res.json();
            })
            .then(data => {  
              console.log(data);       
              setData(data);
              setError(null);         
            })
            .catch(err => {
              if(err.name==='AbortError'){}
              else{
                setError(err.message);
              }
              setData(null)          
            }); 

          });
          
        }
        else{
          setError("Permission Denied")
        }
      }
      //getgeodata=false requests weather information for searched city
      // `http://api.weatherstack.com/current?access_key=${APIKey}&query=${city}`
      else{
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`,
          { signal: abortCont.signal}
        )
        .then(res => {                
          if (!res.ok) { 
            throw Error('could not fetch the data for that resource');
          } 
          return res.json();
        })
        .then(data => { 
          console.log(data);        
          setData(data);
          setError(null);         
        })
        .catch(err => {
          if(err.name==='AbortError'){}
          else{
            setError(err.message);
          }   
          setData(null)       
        });        
      }      
      return()=>abortCont.abort()   
    },[city])
    return {data,error} ;
  }

export default useFetch;