import "./Eventos.css"
import quincho from "../../assets/Quincho1.jpg";
import quinchoabierto from "../../assets/quinchoabierto1.jpeg"
import { Link } from 'react-router-dom';
function Eventos() {
  return (
    <section className="eventos">
      <div>
      { <Link to="/eventos" /> }
        <h4 className="techado">QUINCHO TECHADO</h4>
        <p className="texto"><b>El Espacio Ideal para tus Reuniones y Eventos.</b> En el corazón de nuestra moderna cancha de pádel, te invitamos a descubrir nuestro espacioso y versátil quincho, diseñado para ofrecerte una experiencia inigualable. Con capacidad para hasta 60 personas, este quincho es el lugar perfecto para celebrar todo tipo de eventos, desde reuniones familiares y festejos con amigos hasta encuentros corporativos y celebraciones especiales.</p>
        <img src={quincho} alt="quincho" />
      </div>
      <div>
        <h4 className="techado">QUINCHO ABIERTO</h4>
        <p className="texto"><b>El Espacio Ideal para tus Reuniones y Eventos al aire libre.</b> En el entorno vibrante de nuestra cancha de pádel, te presentamos nuestro exclusivo quincho al aire libre, diseñado para brindar una experiencia excepcional. Con capacidad para hasta 40 personas, este quincho es el lugar perfecto para celebrar una variedad de eventos, desde reuniones familiares y festejos con amigos hasta eventos corporativos y celebraciones especiales.</p>
        <img src={quinchoabierto} alt="quinchoprimera" /></div>

      <div className=" contenedor-contactos btn-group">
        <h4 className="contactos">¡Contactanos!</h4>
        <a className="btn btn-info btn-dark" href="https://www.instagram.com/" target="_blank">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a className="btn btn-primary btn-xs" href="https://www.facebook.com/" target="_blank">
          <i className="fab fa-facebook-f"></i> Facebook
        </a>
        <a className="btn btn-success" href="https://wa.me/+54911111111" target="_blank">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>

    </section>
  )
}

export default Eventos;