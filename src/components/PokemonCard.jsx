
function PokemonCard(){

    const pokemonList = [
        {
          name: "bulbasaur",
          imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        },
        {
          name: "mew",
        },
      ];

    const pokemon = pokemonList[0]
      
   
        return (
            <figure>
              <img src={pokemon.imgSrc ? pokemon.imgSrc :<p>???</p> } alt={pokemon.name}/>
              <figcaption>{pokemon.name}</figcaption>
            </figure>
          )
}
    

 export default PokemonCard;

 