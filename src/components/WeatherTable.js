import React from "react"


const WeatherTable=({data, Available})=>{

    return(
        <>
        {Available && <div className="card">
            <h4>{data.location.name}</h4>
            <div className="row">
                <div className="col-sm">
                    <img src={data.current.condition.icon}/>
                </div>
                <div className="col-sm">
                    <div className="row">
                    <h5>{data.current.temp_c}°C</h5>
                    </div>
                    <div className="row">
                        <p>{data.current.condition.text}</p>
                    </div>
                    
                </div>
                <div className="row inline-flex">
                    
                    <p className="col-sm">
                        Humidity: {data.current.humidity}%
                    </p>
                    <p className="col-sm">
                        Wind: {data.current.wind_kph}Km/h
                    </p>
                    <p className="col-sm">
                        Cloud cover: {data.current.cloud}%
                    </p>
                    
                  
                </div>
            </div>
        </div>}</>
    )
}

export default WeatherTable