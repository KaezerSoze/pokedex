import { useState } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "salamender",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
    },
    {
      name: "squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
    },
    {
      name: "pikachu",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    },
    {
      name: "new"
    }
  ];
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
      <h1>PoKeDex</h1>
      <NavBar
        handleNextPokemon={handleNextPokemon}
        handlePreviousPokemon={handlePreviousPokemon}
        pokemonIndex={pokemonIndex}
        pokemonListLength={pokemonList.length}
      />
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

export default App;

