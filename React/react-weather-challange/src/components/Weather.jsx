import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


function Weather() {
    let location = "lerik"
    const [info, setDatas] = useState([]);

    function GetData() {
        axios.get("https://api.weatherapi.com/v1/current.json?key=7b1eaf6efd804a44b87101529222212&q=" + `${location}` + "&aqi=no")
            .then(res =>setDatas(res.data))

    }

    useEffect(() => {
        GetData()
    }, [])

    function handleSubmit(e){
        e.preventDefault
        alert("salam")
    }

    return (

        <div className='row'> <h2>Weather</h2>
            <span className='span'>
                <input type="text" />  <button onClick={(e)=>handleSubmit(e)}>Get</button>
            </span>
            <p></p>
            <img src="" alt="" />
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <span className='time'>
                <p>11</p>
                <p>22</p>
            </span>

        </div>
    )
}

export default Weather

