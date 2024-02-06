import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [location, setlocation] = useState();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/location/${finder}`;
    
  }, [])
  
  return (
    <div>
      <h1>Rick and Morty</h1>
    </div>
  )
}

export default App
