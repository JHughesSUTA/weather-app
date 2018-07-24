import React from 'react';




const Weather = props => (        // curly bracket and 'return' not needed since returning one element
  <div>
    {/* display weather when values exist */}
    {/* NOTE: can't use 'this' when the component is not a Class */}
    { props.city && props.country && <p>Location: { props.city }, { props.country }</p> }
    { props.temperature && <p>temperature: { props.temperature }</p> }
    { props.humidity && <p>Humidity: { props.humidity }</p> }
    { props.description && <p>Conditions: { props.description }</p> }  
    { props.error && <p>{ props.error }</p> }  
  </div>
);


export default Weather;