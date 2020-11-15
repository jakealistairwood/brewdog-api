import React, { useEffect, useState } from 'react';
import BeerLibrary from './Components/BeerLibrary';
import SideNav from './Components/SideNav';
import styles from './App.scss';

const App = () => {

  const [ beers, setBeers ] = useState([]);
  const [ beerName, setBeerName ] = useState();
  const [ isClassic, setIsClassic] = useState(false);

  const getBeerData = () => {

    // Beers brewed before 2011 can be defined as classic.
    const classicBeer = isClassic ? `&brewed_before=01-2011` : "";

    const searchBeersByName = beerName ? `&beer_name=${beerName}` : "";


    const url = `https://api.punkapi.com/v2/beers?per_page=50${searchBeersByName}${classicBeer}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setBeers(response);
      })
  }
  // Prevent infinite loop of beers being rendered
    useEffect(() => {
        getBeerData();
    }, []);

  return (
    <div>
      {/* <h1>Brewdog Api</h1>
      <p>Grab yourself one of our legendary craft beers!</p> */}
      <SideNav getBeerData={getBeerData}
               isClassic={isClassic} 
               setIsClassic={setIsClassic}
               beerName={beerName}
               setBeerName={setBeerName} 
      />
      <BeerLibrary beers={beers} />
    </div>
  )
}

export default App;

