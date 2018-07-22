import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';


const API_KEY = "2a8d68521c97a8c214aabda8b7ff3ffd";

class App extends React.Component {
  
  // connect to weather API
  getWeather = async (e) => {
    e.preventDefault();
    
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Chicago,US&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();

    console.log(data);
  }

  render() {
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
};


export default App;
