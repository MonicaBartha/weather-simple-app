import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {
   // main state (form)
   const [ search, setSearch ] = useState({
    city: '',
    country: ''
});

const [request, setRequest] = useState(false);

const [result, setResult] = useState({});

const [error, setError] = useState(false);

const { city, country } = search;

useEffect( () => {
  const requestAPI = async () => {
   
    if( request ) {
        const appID = '431bb796b5a39c2ff4a84848350749c0';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`;

        const response = await fetch(url);
        const result = await response.json();
        setResult(result);
        setRequest(false);

        // show error if city is not found 
        if (result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
    }
  }
  requestAPI();
}, [request]);
 // conditional loading of components
 let component;
 if(error) {
   component = <Error message="Location not found." />
 } else {
   component =  <Weather
                  result={result}
                  />
 }

  return (
    <Fragment>
        <Header
          title="Weather App"
        />

        <div className="container-form">
          <div className="container">
            <div className="row">
              <div className="col m6 s12">
                  <Form
                  search={search}
                  setSearch={setSearch}
                  setRequest={setRequest}
                  />
              </div>

              <div className="col m6 s12">
               {component}
              </div>
            </div>
          </div>
        </div>
    </Fragment>
  );
}

export default App;
