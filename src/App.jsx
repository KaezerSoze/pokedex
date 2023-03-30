import { useState, useEffect } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';
import NavBar from './components/NavBar';

function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
     
      color: "#78C850"
    },
    {
      name: "salamender",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      
      color: "#F08030"
    },
    {
      name: "squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      
      color: "#6890F0"
    },
    {
      name: "pikachu",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      
      color:"#F7D346"

    },
    {
      name: "new",
      color: "#000000"
    }
  ];
  const [pokemonIndex, setPokemonIndex] = useState(0);
  const [pokemonObject, setPokemonObject] = useState(pokemonList[pokemonIndex])

    
    
  const handleNextPokemon = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
      setPokemonObject(pokemonList[pokemonIndex])
       if(
        pokemonIndex === 3 
      ) { alert("pika picachu")}
    }

    }
  

  const handlePreviousPokemon = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
      setPokemonObject(pokemonList[pokemonIndex])
      if(
        pokemonIndex === 3 
      ) { alert("pika picachu")}
    }
  };

  const pokemon = pokemonList[pokemonIndex];

  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);

  
  

  return (
    <div>
      <NavBar
        handleNextPokemon={handleNextPokemon}
        handlePreviousPokemon={handlePreviousPokemon}
        pokemonIndex={pokemonIndex}
        pokemonListLength={pokemonList.length}/>
          <div className="pokemon-card-container">
        <h1 style={{ color: pokemon.color }}>PoKédex</h1>
        <PokemonCard pokemon={pokemon} />
        
     
      </div>
    </div>
  );
  
  }
export default App;

