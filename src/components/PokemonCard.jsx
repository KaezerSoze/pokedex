import PropTypes from "prop-types";



function PokemonCard({pokemon}){
        return (
            <figure>
              <img src={pokemon.imgSrc ? pokemon.imgSrc : <p>???</p> } alt={pokemon.name}/>
              <figcaption>{pokemon.name}</figcaption>
            </figure>
          )
}
    

 


PokemonCard.propTypes ={
        pokemon:PropTypes.shape({
          name: PropTypes.string,
        })
}




 export default PokemonCard;

 