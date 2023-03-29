import PropTypes from "prop-types";
import { useState } from "react";



function NavBar({ handleNextPokemon, handlePreviousPokemon, pokemonIndex, pokemonListLength }) {
  return (
    <div>
      {pokemonIndex > 0 && <button onClick={handlePreviousPokemon}>Précédent</button>}
      {pokemonIndex < pokemonListLength - 1 && <button onClick={handleNextPokemon}>Suivant</button>}
    </div>
  );
}

NavBar.propTypes = {
  handleNextPokemon: PropTypes.func.isRequired,
  handlePreviousPokemon: PropTypes.func.isRequired,
  pokemonIndex: PropTypes.number.isRequired,
  pokemonListLength: PropTypes.number.isRequired,
};

export default NavBar;

    
    









