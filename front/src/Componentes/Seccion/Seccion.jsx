import './Seccion.css'
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import canchaPadel from '../../assets/canchaPadel.jpg';
import cancha2 from '../../assets/cancha2.jpg';
import cancha3 from '../../assets/cancha3.jpg';

function Seccion() {
    return (
        <section className='seccion'>
            {<Link to="/seccion" /> }
            <div>
              <br />
    <Carousel className='carrusel'>
      <Carousel.Item interval={1000}>
        <img src={canchaPadel} alt="cancha" className='imgjugador' text="First slide" />  
        <Carousel.Caption>
          <p>Cancha 1 ¡La preferida de todos!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={cancha2} alt="jugadores" className='imgjugador' text="Second slide"/>  
        <Carousel.Caption>
          <p>Cancha 2</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={cancha3} alt="jugadores" className='imgjugador'text="Third slide" />
        <Carousel.Caption>
          <p>Cancha 3</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
            </div>

        </section>)
};
export default Seccion;