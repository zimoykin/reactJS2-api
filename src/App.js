import React, { useState } from 'react';
import './App.css';
import MainLogo from './Logos/Logo'
import SecondLogo from './Logos/SecondLogo'
import StartPage from './Pages/StartPage'
import Context from './Context'

function App() {


function setSearch ( value ) {

}

  const [searchResult, setSearchResult] = useState([]);

  return (
    <Context.Provider value={{ setSearch }}> 

    <div className="App">

            <div> 
             <StartPage />
            </div>

    </div>
  </Context.Provider>
  )
}

export default App;