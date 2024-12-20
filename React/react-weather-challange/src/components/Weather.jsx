import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


function Weather() {

    const[location,setLocation]=useState("Lerik")
    const [data, setData] = useState({});

    function GetData() {
        axios.get(`https://api.weatherapi.com/v1/current.json?key=7b1eaf6efd804a44b87101529222212&q=${location}&aqi=no`)
            .then(res =>setData
                (res.data)
            )

    }

    useEffect(() => {
        GetData()
    }, [])

    function handleSubmit(e){
        e.preventDefault()
        GetData()
    }

    return (

        <div className='row'> <h2>Weather</h2>
            <span className='span'>
                <form onSubmit={(e)=>handleSubmit(e)}><input type="text" value={location} onChange={(e)=>setLocation(e.target.value)}/>  <button >Get</button></form>
                
            </span>
            <p>{data.location?.region}</p>
            <img src={data.current?.condition.icon}/>
            <p>{data.current?.condition.text}</p>
            <p>{data.current?.temp_c}</p>
            <p>{data.current?.temp_f}</p>
            <span className='time'>
                <p>Wind {data.current?.wind_mph} MPH</p>
                <p>Visibility{data.current?.vis_km} KM</p>
            </span>

        </div>
    )
}

export default Weather

