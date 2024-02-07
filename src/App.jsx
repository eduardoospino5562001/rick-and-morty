import { useEffect, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import LocationCard from './components/LocationCard';
import ResidentCard from './components/ResidentCard';

function App() {
  
  //const [location, setlocation] = useState();
  const [location, getLocation] = useFetch();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/3`;
    getLocation(url);
  }, []);

  //console.log(location);
  
  return (
    <div>
      <h1>Rick and Morty</h1>
      <LocationCard 
      location={location}
      />
      {
        location?.residents.map(resident => (
          <ResidentCard 
            key={resident}
            url={resident}
          />
        ))
      }
      
    </div>
  )
}

export default App;
