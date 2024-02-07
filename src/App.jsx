import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import LocationCard from './components/LocationCard';
import ResidentCard from './components/ResidentCard';

function App() {
  const [finder, setfinder] = useState(Math.floor(Math.random() * 126 + 1));
  const [location, getLocation, isLoading, hasError] = useFetch();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${finder}`;
    getLocation(url);
  }, [finder]); 



  const textInput = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    setfinder(textInput.current.value.trim());
  }


  return (
    <div className='app'>
      {
        isLoading ? 
          <h2>Loading...</h2>
          :
          <>
            <h1>Rick and Morty</h1>
            <form 
            onSubmit={handleSubmit}
            className='app__form'
            >
              <input 
                className='app__text'
                type="number" 
                ref={textInput} 
                placeholder='type a number (1 to 126)'
              />
              <button className='app__btn'>Search</button>
            </form>
            {
              hasError || finder==='0' ?
                <h2>This location do not exist</h2>
                :
                <>
                <LocationCard
              location={location}
            />
            <div className='app__container'>
            {
              location?.residents?.map(resident => (
                <ResidentCard 
                key={resident} 
                url={resident} 
              />
            ))
            }
            </div>
                </>
            }
            
          </>
      }
      
    </div>
  );
}

export default App;
