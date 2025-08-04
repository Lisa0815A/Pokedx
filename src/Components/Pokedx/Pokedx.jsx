import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import './Pokedx.css'
function Pokedx(){
  return(
    <>
      <div className="pokedx-wrapper">
        <h1>Pokedx</h1>
        <Search/>
        <PokemonList/>
      </div>
    </>
  )
}
export default Pokedx ;