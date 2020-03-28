import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const API_URL = 'http://localholhost:1905'

  const [vehiculos, setVehiculos] = useState([]);

  useEffect(
    getInfo(), []
  )

  const getInfo = async () => {
    const response = await fetch('')
    const data = response.json()
    setVehiculos(data);
  }

  return (
    <div className="App">
      <h1>Hello from React</h1>
    </div>
  )
}

export default App;
