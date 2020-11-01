import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Form = ( {search, setSearch, setRequest} ) => {


    const [ error, setError ] = useState(false);

    // get city and country to put in input value - destructuring 
    const { city, country } = search;



    // function for put the elements in the state
    const handleChange = e => {
        // actualizar el state
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        });
    }
    // when the user submit the form
    const handleSubmit = e => {
        e.preventDefault();

        // validate form
        if( city.trim() === '' || country.trim() === '' ) {
            setError(true);
            return;
        }
        setError(false);
         // pass to component 
        setRequest(true);
    }

   

    return (
        <form onSubmit={handleSubmit} >
           {error ? <Error message="All fields are mandatory." /> : null }
            <div className="input-field col s12">
                <input
                type="text" 
                name="city"
                id="city"
                value={city}
                onChange={handleChange}
                />
                <label htmlFor="city" > City: </label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="country" 
                    id="country"
                    value="country"
                    onChange={handleChange}
                    >
                    <option value="">-- Select country --</option>
                    <option value="US">United States</option>
                    <option value="MX">Mexic</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Spain</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="country">Country:</label>
            </div>

            <div className="input-field col s12">
                <input
                type="submit"
                value="Search Weather"
                className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    )
}

Form.propTypes = {
    search: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    setRequest: PropTypes.func.isRequired
}
export default Form; 