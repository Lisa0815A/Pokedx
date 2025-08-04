import './PokemonDetails.css';

import { useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

function PokemonDetails(){
  
  const {id} = useParams();  
  const POKEMON_DETAIL_URL = `https://pokeapi.co/api/v2/pokemon/${id}`
  const [pokemon,setPokemon] = useState(null);
  async function downLoadPokemon(){
    const response = await  axios.get(POKEMON_DETAIL_URL );
    const pokemon = response.data;
    setPokemon({
      name:pokemon.name,
      height:pokemon.height,
      weight:pokemon.weight,
      types:pokemon.types,
      image:pokemon.sprites.other.dream_world.front_default,     
    })
  }

  useEffect(() => {
     downLoadPokemon();
  },[])
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
    </>
  )
}
export default PokemonDetails;