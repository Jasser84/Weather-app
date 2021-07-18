import axios from 'axios';
import React,{useEffect, useState} from 'react';
import './App.css';
import Input from './components/Input';
import WeatherTable from './components/WeatherTable';

function App() {
  const [city, setCity] = useState("");
  const [data,setData] = useState([]);
  const [Available, setAvailable] = useState(false);
  useEffect(()=>{
    async function fetchData(){
      const result = await axios(`http://api.weatherapi.com/v1/current.json?key=354e46b3a38c464daff175710212606&q=${city}&aqi=yes`);
      console.log(result.data);
      setData(result.data)
      setAvailable(true);
    }
    fetchData();
  },[city])
  return (
    <div className="App container-fluid col-md mt-12">
          <Input city={city} setCity={setCity}/>
        
        
          <WeatherTable Available={Available} data={data}/>
    </div>
  );
}

export default App;
