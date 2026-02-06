import { useEffect, useState } from "react"
const cityCoords = {
  Rajkot: { lat: 22.3039, lon: 70.8022 },
  Ahmedabad: { lat: 23.0225, lon: 72.5714 },
  Surat: { lat: 21.1702, lon: 72.8311 },
  Mumbai: { lat: 19.0760, lon: 72.8777 },
  Delhi: { lat: 28.6139, lon: 77.2090 },
  Chennai: { lat: 13.0827, lon: 80.2707 },
  Jaipur: { lat: 26.9124, lon: 75.7873 },
  Manali: { lat: 32.2396, lon: 77.1887 },
  Bangalore: { lat: 12.9716, lon: 77.5946 },
  Bhuj: { lat: 23.2420, lon: 69.6669 }
};
export default function WeatherAPI(){
    const [city,setCity] = useState("Rajkot");
    const [weather,setWeather] = useState(null);

    const fetchData = async()=>{
        let {lat,lon} = cityCoords[city];
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const d = await res.json();
        setWeather(d);
    }
    useEffect(()=>{
        fetchData();
    },[city])
    return(
    <>
        <div className="container mt-5">
            <div className="card mx-auto" style={{maxWidth:"400px"}}>
        <h1 className="text-center">Weather API</h1>
        <select value={city} onChange={(e)=>setCity(e.target.value)}>
            {Object.keys(cityCoords).map((c,i)=><option keys={c}>{c}</option>)}
            {/* <option>Rajkot</option>
            <option>Ahmedabad</option>
            <option>Surat</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Chennai</option>
            <option>Jaipur</option>
            <option>Manali</option>
            <option>Bangalore</option>
            <option>Bhuj</option> */}
        </select>
        <hr/>
       {weather && (
        <h3> Temperature: {weather.current_weather.temperature} {weather.current_weather_units.temperature} </h3> )}
    </div>
    </div>
    </>
    )
}