import React, { useEffect, useState } from 'react';
import BeerLibrary from './Components/BeerLibrary';
import SideNav from './Components/SideNav';
import styles from './App.scss';

const App = () => {

  const [ beers, setBeers ] = useState([]);
  const [ beerName, setBeerName ] = useState();
  const [ isClassic, setIsClassic] = useState(false);
  const [ isLight, setIsLight ] = useState(false);
  const [ isMedium, setIsMedium ] = useState(false);
  const [ isStrong, setIsStrong ] = useState(false);
  const [ isAlcoholFree, setIsAlcoholFree ] = useState(false);
  const [ isExtraStrong, setIsExtraStrong ] = useState(false);

  const getBeerData = () => {

    // Beers brewed before 2011 can be defined as classic.
    const classicBeer = isClassic ? `&brewed_before=01-2011` : "";

    const searchBeersByName = beerName ? `&beer_name=${beerName}` : "";

    const alcoholFree = isAlcoholFree ? `&abv_lt=0.6` : "";

    const lightBeers = isLight ? `&abv_lt=4.5` : "";

    const mediumBeers = isMedium ? `&abv_gt=4.5&abv_lt=7` : "";

    const strongBeers = isStrong ? `&abv_gt=7.1&abv_lt=10` : "";

    const extraStrong = isExtraStrong ? `&abv_gt=10` : "";

    const url = `https://api.punkapi.com/v2/beers?per_page=50${searchBeersByName}${classicBeer}${lightBeers}${mediumBeers}${strongBeers}${extraStrong}${alcoholFree}`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setBeers(response);
      })
  }
  // Prevent infinite loop of beers being rendered
    useEffect(() => {
        getBeerData();
    }, [isClassic, isLight, isMedium, isStrong, isAlcoholFree, isExtraStrong]);

  return (
    <div>
      {/* <h1>Brewdog Api</h1>
      <p>Grab yourself one of our legendary craft beers!</p> */}
      <SideNav getBeerData={getBeerData}
               isClassic={isClassic} 
               setIsClassic={setIsClassic}
               beerName={beerName}
               setBeerName={setBeerName}
               isLight={isLight}
               setIsLight={setIsLight}
               isMedium={isMedium}
               setIsMedium={setIsMedium}
               isStrong={isStrong}
               setIsStrong={setIsStrong}
               isAlcoholFree={isAlcoholFree}
               setIsAlcoholFree={setIsAlcoholFree}
               isExtraStrong={isExtraStrong}
               setIsExtraStrong={setIsExtraStrong}

      />
      <BeerLibrary beers={beers} />
    </div>
  )
}

export default App;

