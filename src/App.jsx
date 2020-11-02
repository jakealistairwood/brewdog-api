import React, { useEffect, useState } from 'react';
import BeerLibrary from './Components/BeerLibrary';

const App = () => {

  const [ beers, setBeers ] = useState([]);

  const getBeerData = () => {
    fetch('https://api.punkapi.com/v2/beers/')
      .then((response) => response.json())
      .then((response) => {
        setBeers(response);
      })
  }

  console.log(getBeerData);
  // Prevent infinite loop of beers being rendered
  useEffect(() => {
    getBeerData();
    console.log("Use effect was called");
  }, []);

  const getBeersByName = (searchTerm) => {
    fetch('https://api.punkapi.com/v2/beers?ber+name=' + searchTerm)
      .then((response) => response.json())
      .then((response) => {
        setBeers(response);
      })
  }

  return (
    <div>
      <h1>Brewdog Api</h1>
      <p>Grab yourself one of our legendary craft beers!</p>
      <BeerLibrary beers={beers} />
    </div>
  )
}

export default App;

