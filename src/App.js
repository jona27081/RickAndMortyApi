import './App.css';
import imageRickMorty from './img/rick-morty.png';
import credencial from './img/Credencial.jpeg';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const restapi =  async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterapi = await api.json();
    setCharacters(characterapi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ) : ( 
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className='img-home'></img>
            <button onClick={restapi} className='btn-search'>Buscar Personajes</button>
          </>
        )}
        <div className='datos'>
        <h4>--------------------</h4>
        <div className='img-crede'>
          <img src={credencial} height="160px" alt="Credencial"></img>
        </div>
        <h4>Jonathan Ojeda Rosas - zs20006736</h4>
      </div>
      </header>
    </div>
  );
}

export default App;
