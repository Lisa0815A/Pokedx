import './PokemonList.css';
import Pokemon from '../Pokemon/Pokemon'
import { useEffect,useState } from 'react';
import axios from 'axios';

function PokemonList(){
  const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";
  const[pokemonList,setPokemonList] = useState([]);
  const [pokedxURL,setPokedxURL] = useState(DEFAULT_URL);
  const [nextURL,setNextURL] = useState(DEFAULT_URL);
  const [prevURL,setPrevURL] = useState(DEFAULT_URL);

  async function downloadPokemons(){
    const response = await axios.get(pokedxURL ? pokedxURL : DEFAULT_URL);
    const pokemonResults = response.data.results; //array of pokemons

    setNextURL(response.data.next);
    setPrevURL(response.data.previous);

    const pokemonPromise = pokemonResults.map((pokemon) => axios.get (pokemon.url) ) ;    
    const pokemonListData = await axios.all(pokemonPromise);
    const pokemonFinalList = pokemonListData.map(pokemonData => {
      const pokemon = pokemonData.data;
      return{
        id:pokemon.id,
        name:pokemon.name,
        image:pokemon.sprites.other.dream_world.front_default,
        types:pokemon.types,        
      }
    })
    setPokemonList(pokemonFinalList);
    console.log(pokemonFinalList);    
  }
  useEffect(()=>{
      downloadPokemons();
    },[pokedxURL]);
  return(
    <>
      <div className='pokemon-list-wrapper'>
        <div className='pokemon-header'>Pokemon List</div>
        <div className='page-controll'>
          <button onClick={() => setPokedxURL(prevURL) }>Prev</button>
          <button onClick={() => setPokedxURL(nextURL)}>Next</button>
        </div>
        <div className='pokemon-list'>
          {pokemonList.map(pokemon => (
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