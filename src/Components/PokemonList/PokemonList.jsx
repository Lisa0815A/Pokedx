import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon'
import { useEffect,useState } from 'react';
import downloadPokemons from '../../Utils/downloadPokemons';

function PokemonList(){
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
  //const[pokemonList,setPokemonList] = useState([]);
  //const [pokedxURL,setPokedxURL] = useState(DEFAULT_URL);
  //const [nextURL,setNextURL] = useState(DEFAULT_URL);
  //const [prevURL,setPrevURL] = useState(DEFAULT_URL);
  const [pokemonListState,setPokemonListState] = useState({
    pokemonList:[],
    pokedxUrl:DEFAULT_URL ,
    nextURL:DEFAULT_URL ,
    prevURL:DEFAULT_URL 
  });

  
  useEffect(()=>{
      downloadPokemons(pokemonListState,setPokemonListState,DEFAULT_URL);
    },[pokemonListState.pokedxUrl]);
  return(
    <>
      <div className='pokemon-list-wrapper'>
        <div className='pokemon-header'>Pokemon List</div>
        <div className='page-controll'>
          <button onClick={() => setPokemonListState({...pokemonListState,pokedxUrl:pokemonListState.prevURL}) }>Prev</button>
          <button onClick={() => setPokemonListState({...pokemonListState,pokedxUrl:pokemonListState.nextURL})}>Next</button>
        </div>
        <div className='pokemon-list'>
          {pokemonListState.pokemonList.map(pokemon => (
            <Pokemon
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              id={pokemon.id}              
            />))
          }
        </div>
      </div>   
    </>
  )
}
export default PokemonList ;