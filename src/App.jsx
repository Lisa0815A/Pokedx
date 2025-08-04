import Pokedx from "./Components/Pokedx/Pokedx"
import './App.css'
import { Routes ,Route } from "react-router-dom"
import PokemonDetails from "./Components/PokemonDetails/PokemonDetails"
function App() {  
  return (
    <Routes>
      <Route path="/" element={<Pokedx/>}/>
      <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
      <Route path="*" element={<div>Not Fpund</div>}></Route>
    </Routes>
  )
}

export default App
