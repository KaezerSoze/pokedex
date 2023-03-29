import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from './components/PokemonCard'
import "./App.css"



function App() {
      
    
  const pokemonList = [
    { 
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name:"salamender",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    },
    {
      name:"squirtle",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    },
    {
      name: "pikachu",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    }

  ]
  const [pokemonIndex, setPokemonIndex] = useState(0);


  
  const handleNextPokemon = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  const handlePreviousPokemon = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  
  const pokemon = pokemonList[pokemonIndex];

  return (
    <div>
     
     
      <PokemonCard pokemon={pokemon} />
      {pokemonIndex > 0 && <button onClick={handlePreviousPokemon}>Précédent</button>}
      {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNextPokemon}>Suivant</button>}

    </div>
  );
}
 
export default App;
