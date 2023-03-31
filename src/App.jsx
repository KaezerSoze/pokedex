import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      color: "#78C850",
    },
    {
      name: "Salamender",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      color: "#F08030",
    },
    {
      name: "Squirtle",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      color: "#6890F0",
    },
    {
      name: "Pikachu",
      imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      color: "#F8D030",
    },
  ];
  const [pokemonIndex, setpokemonIndex] = useState(0);
  const handlePokemonClick = (index) => setpokemonIndex(index);

  return (   
    <div>   <h1 style={{ textTransform: "uppercase" }}>PoKeDex</h1> 

      <NavBar pokemonList={pokemonList}
       onPokemonClick={handlePokemonClick} />  
       
      <PokemonCard pokemon={pokemonList[pokemonIndex]} /> 
         </div> 
   );}
export default App;