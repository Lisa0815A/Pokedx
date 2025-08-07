import useDebounce from '../../hooks/useDebounce';
import './Search.css';
function Search({updateSearchTerm}){
  const debounceUpdatedSearch = useDebounce((e) => updateSearchTerm(e.target.value));
  return(
    <>
    <input 
      id='search-pokemon'
      type='text'
      placeholder='Which Pokemon You are looking for ?'
      onChange={debounceUpdatedSearch}
      />
    </>
  )
}
export default Search ;