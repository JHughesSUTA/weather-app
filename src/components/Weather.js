 import React from 'react';


class Weather extends React.Component {
  render() {
    return (
      <div>
        {/* display weather when values exist */}
        { this.props.city && this.props.country && <p>Location: { this.props.city }, { this.props.country }</p> }
        { this.props.temperature && <p>temperature: { this.props.temperature }</p> }
        { this.props.humidity && <p>Humidity: { this.props.humidity }</p> }
        { this.props.description && <p>Conditions: { this.props.description }</p> }  
        { this.props.error && <p>{ this.props.error }</p> }  
      </div>
    );
  }
}


export default Weather;