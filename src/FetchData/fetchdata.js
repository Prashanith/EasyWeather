import { useState,useEffect } from 'react' 

const useFetch =(city)=>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);  

    const APIKey='d48141cb9d0d8f3b9ef1c98ffd970dfe';

    useEffect(() => {
      const abortCont= new AbortController();

      //getgeodata requests weather information for current location
      if(!city){        
        if (navigator.geolocation) {
          let longitude=null;
          let latitude=null        
          navigator.geolocation.getCurrentPosition((position)=>{         
            latitude= position.coords.latitude;
            longitude= position.coords.longitude;      
            fetch(
              `http://api.weatherstack.com/current?access_key=${APIKey}&query=${latitude+","+longitude}`,
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
            }); 

          });
          
        }
        else{
          setError("Permission Denied")
        }


      }
      //getgeodata=false requests weather information for searched city
      else{
        fetch(
          `http://api.weatherstack.com/current?access_key=${APIKey}&query=${city}`,
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
        });        
      }      
      return()=>abortCont.abort()   
    },[city])
    return {data,error} ;
  }

export default useFetch;