import './Canchas.css'
import { Link } from 'react-router-dom';

function Canchas (){
    return(
        <div className='canchas-titulos'>
             { <Link to="/reservas" />}
          <h4>
      ¿Pintó un partidito a último momento?
      ¡Siempre estás a tiempo de reservar!
      </h4>
 
      </div>);
      }
        


export default Canchas ;