import './App.css';
import { useEffect, useState } from "react";
import CharactersGrid from "./CharactersGrid";
import Spinner from './Spinner';
import Search from "./Search";

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(`https://breakingbadapi.com/api/characters?name=${query}`)
      .then(response => response.json())
      .then(response => {
        setIsLoading(false);
        setCharacters(response);
      });
  }, [query])

  return (
    <div className="App">
      <header>
        <div className="logo"></div>
      </header>
      <main>
        {isLoading ? (<Spinner />) : (
          <div className="grid-div">
            <Search setQuery={(q) => setQuery(q)} />
            <CharactersGrid characters={characters} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

