import React, { useEffect, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import LocationCard from './components/LocationCard';
import ResidentCard from './components/ResidentCard';

function App() {
  const [location, getLocation] = useFetch();

  useEffect(() => {
   
    const randomLocation = Math.floor(Math.random() * 126 + 1);
    const url = `https://rickandmortyapi.com/api/location/${randomLocation}`;
    getLocation(url);
  }, []); 

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
        location?.residents?.map(resident => (
          <ResidentCard 
          key={resident} 
          url={resident} 
          />
      ))
      }
    </div>
  );
}

export default App;
