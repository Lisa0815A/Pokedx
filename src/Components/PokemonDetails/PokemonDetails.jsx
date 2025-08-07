import './PokemonDetails.css';
import {Link} from 'react-router-dom';
import usePokemon from "../../hooks/usePokemon"
import Pokemon from '../Pokemon/Pokemon';

function PokemonDetails({pokemonName}){
  
  
  const [pokemon,pokemonListState] = usePokemon(pokemonName);
  
  return(
    <>
    <h1 className='pokedx-redirect'>
      <Link to="/">
        pokedx
      </Link>
    </h1>
      {pokemon && <div className='pokemon-details-wrapper'>
        <div className='pokemon-name'>
          {pokemon.name}
        </div>
        <div className='pokemon-img'>
          <img src={pokemon.image}/>
        </div>
        <div className='pokemon-hw'>
          <div>
            height:{pokemon.height}
          </div>
          <div>
            weight:{pokemon.weight}
          </div>          
        </div>
        <div className='pokemon-type'>
          <h1>Type:</h1>{pokemon.types.map((t) => (<span className='type' key={t.type.name}>{t.type.name}</span>))};
        </div>
      </div>}
      <div className='similar-pokemons'>
        <h2>Similar Pokemons</h2> 
        <div className='pokemon-similar-boxex'>
        {pokemonListState.pokemonList.length > 0 &&
          pokemonListState.pokemonList.map((pokemon) => (
            <Pokemon
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              id={pokemon.id}
            />
          ))
        }
      </div>
      </div>      
    </>
  )
}
export default PokemonDetails;