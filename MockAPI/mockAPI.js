import { useEffect, useState } from "react"
export default function MockAPI(){
    const [data,setData] = useState([]);
    const [fuel,setFuel] = useState("Hybrid");

    const apicall = async ()=>{
        const res = await fetch(`https://697ac5fe0e6ff62c3c5a132a.mockapi.io/products/vehicle?fuel=${fuel}`)
        const d = await res.json();
        setData(d);
    }
    useEffect(()=>{
        apicall();
    },[fuel])
    return(
    <>  
        {/* <button onClick={apicall}>API Call</button> */}
        <select value={fuel} onChange={(e)=>setFuel(e.target.value)}>
            <option value="Hybrid">Hybrid</option>
            <option value="Electric">Electric</option>
            <option value="Gasoline">Gasoline</option>
            <option value="Diesel">Diesel</option>
        </select>
        <br/>
        <ol>
            {data.map((v,i)=><li key={i}>{v.name} - {v.model} - {v.fuel} - {v.city}</li>)}
        </ol>
    </>)
}