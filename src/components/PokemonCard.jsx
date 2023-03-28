
function PokemonCard(props){
        return (
            <figure>
              <img src={props.pokemon.imgSrc ? props.pokemon.imgSrc : <p>???</p> } alt={props.pokemon.name}/>
              <figcaption>{props.pokemon.name}</figcaption>
            </figure>
          )
}
    

 export default PokemonCard;

 