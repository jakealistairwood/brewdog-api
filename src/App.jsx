import React, { useEffect, useState } from 'react';
import BeerLibrary from './Components/BeerLibrary';
import SideNav from './Components/SideNav';
import styles from './App.scss';

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
  }, []);

  const getBeersByName = (searchTerm) => {

    // Prevents error occuring when searchbar is emptied
    if (searchTerm === "") {
      return
    } else {
      fetch('https://api.punkapi.com/v2/beers?beer_name=' + searchTerm)
      .then((response) => response.json())
      .then((response) => {
        setBeers(response);
      })
    }
  }

  return (
    <div>
      {/* <h1>Brewdog Api</h1>
      <p>Grab yourself one of our legendary craft beers!</p> */}
      <SideNav updateSearchField={getBeersByName} />
      <BeerLibrary beers={beers} />
    </div>
  )
}

export default App;

