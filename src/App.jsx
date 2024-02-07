import { useEffect, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import LocationCard from './components/LocationCard';
import ResidentCard from './components/ResidentCard';

function App() {
  
  //const [location, setlocation] = useState();
  const [location, getLocation] = useFetch();
  const randomLocation = Math.floor (Math.random() * 126);

  useEffect(() => {
    
    const url = `https://rickandmortyapi.com/api/location/3`;
    getLocation(url);
  }, []);
  console.log(randomLocation);
  //console.log(location);
  
  return (
    <div>
      <h1>Rick and Morty</h1>
      <form>
        <input type="number" />
        <button>Search</button>
      </form>
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
