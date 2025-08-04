import './Pokemon.css' ;
import { Link } from 'react-router-dom';
function Pokemon({ name, image, id }) {
  return (  
    <Link to={`/pokemon/${id}`} className='pokemon-wrapper'>  
      <div className="pokemon-card">      
        <h3>{name}</h3>
        <img src={image} alt={name} />                
      </div>
    </Link>      
  );
}

export default Pokemon;
