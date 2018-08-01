import React from 'react';




const Weather = props => ( 
  <div className="weather-info">
    { 
      props.city && props.country && <p className="weather__key">Location: 
        <span className="weather__value"> { props.city }, { props.country }</span>
      </p> 
    }
    { 
      props.temperature && <p className="weather__key">temperature: 
        <span className="weather__value"> { props.temperature }</span>
      </p> 
    }
    { 
      props.humidity && <p className="weather__key">Humidity: 
        <span className="weather__value"> { props.humidity }</span>
      </p> 
    }
    { 
      props.description && <p className="w eather__key">Conditions: 
        <span className="weather__value">  { props.description }</span>
      </p> 
    }  
    { 
      props.error && <p className="weather__error">
        <span>{ props.error }</span>
      </p> 
    }  
  </div>
);


export default Weather;