import './Tarjeta.css'
import { Link } from 'react-router-dom';
function Tarjetaquincho() {
  return (
    <div className='contenedor-tarjeta'>
       {<Link to="/eventos" /> }
   <p className="parrafo-tarjeta">Sabemos que te apasiona jugar, pero una cosa lleva a la otra, y quien dice partidito también dice asado con amigos. Por eso, te resolvemos el problema. No hace falta que busques donde comer el asado post partido, ¡podés hacerlo acá!</p>
  </div>);
}

export default Tarjetaquincho;