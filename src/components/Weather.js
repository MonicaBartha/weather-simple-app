import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({ result }) => {
    // extract the values from object result
    const {name, main} = result;

    if(!name) return null;
    // Kelvin grades
    const kelvin = 273.15;
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Weather from {name} is: </h2>
                {/* by default temperature is in kelvin. Transform to Celsius and keep only 2 decimals */}
                <p className="temperature">
                    { parseFloat(main.temp - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>
                <p> Max: 
                    { parseFloat(main.temp_max - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>
                <p> Min: 
                    { parseFloat(main.temp_min - kelvin, 10).toFixed(2) } <span>&#x2103;</span>
                </p>
            </div>
        </div>
    )
}

Weather.propTypes = {
    result: PropTypes.object.isRequired
}
export default Weather;