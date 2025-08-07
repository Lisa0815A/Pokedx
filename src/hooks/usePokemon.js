import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import downloadPokemons from '../Utils/downloadPokemons';

function usePokemon(pokemonName) {
  const { id } = useParams();
  const POKEMON_DETAIL_URL = `https://pokeapi.co/api/v2/pokemon/`;

  const [pokemon, setPokemon] = useState(null);
  const [pokemonListState, setPokemonListState] = useState({
    pokemonList: [],
    pokedxUrl: '',
    nextURL: '',
    prevURL: ''
  });

  async function downLoadGivenPokemon() {
    const identifier =  pokemonName || id;
    console.log(POKEMON_DETAIL_URL + identifier);

    const response = await axios.get(POKEMON_DETAIL_URL + identifier);
    const data = response.data;

    setPokemon({
      name: data.name,
      height: data.height,
      weight: data.weight,
      types: data.types,
      image: data.sprites.other.dream_world.front_default,
    });

    const types = data.types.map(t => t.type.name);
    return types[0];
  }

  async function downloadPokemonAndRelated() {
    try{
      const type = await downLoadGivenPokemon();
      await downloadPokemons(
      pokemonListState,
      setPokemonListState,
      `https://pokeapi.co/api/v2/type/${type}`
      );
    }catch(e){
       console.log("no pokemon found");
    }
    
  }

  useEffect(() => {
    downloadPokemonAndRelated();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [id, pokemonName]);

  return [pokemon, pokemonListState];
}

export default usePokemon;
