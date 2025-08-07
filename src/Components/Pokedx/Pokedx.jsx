import { useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import './Pokedx.css'
import PokemonDetails from "../PokemonDetails/PokemonDetails";
function Pokedx(){
const [searchTerm,setSearchTerm] = useState('');
  return(
    <>
      <div className="pokedx-wrapper">
        <h1>Pokedx</h1>
        <Search updateSearchTerm = {setSearchTerm}/>        
        {searchTerm ? <PokemonDetails pokemonName={searchTerm}/>:<PokemonList/>}
      </div>
    </>
  )
}
export default Pokedx ;