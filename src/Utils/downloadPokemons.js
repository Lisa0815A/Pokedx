import axios from "axios";
async function downloadPokemons(pokemonListState,setPokemonListState,defaulturl,limit = 20) {
  const response = await axios.get(pokemonListState. pokedxUrl? pokemonListState.pokedxUrl : defaulturl);
  let pokemonResults = response.data.results ? response.data.results:response.data.pokemon; 
  pokemonResults = pokemonResults.slice(0,limit)
  const pokemonPromise = pokemonResults.map((p) => {
    if(p.url){
      return axios.get (p.url) 
    }else if(p.pokemon.url){
      return axios.get(p.pokemon.url);
    }
   
  }) ;    
  const pokemonListData = await axios.all(pokemonPromise);
  console.log(pokemonListData);
  const pokemonFinalList = pokemonListData.map(pokemonData => {
  const pokemon = pokemonData.data;
    return{
      id:pokemon.id,
      name:pokemon.name,
      image:pokemon.sprites.other.dream_world.front_default,
      types:pokemon.types,        
    }
  })  
  setPokemonListState({...pokemonListState,pokemonList:pokemonFinalList,nextURL:response.data.next ,prevURL:response.data.previous});     
}
export default downloadPokemons ;