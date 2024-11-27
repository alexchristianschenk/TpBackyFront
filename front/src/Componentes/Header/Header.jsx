import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (

    <div className='contenedor-header'>
      <h2 className="header">Delta sports</h2>
      <h3 className='titulo2'>Disfrutá de hacer deporte</h3>
      <Navbar expand="lg" className="barra-nav">
        <Container>
          <Navbar.Brand>¡VENI A JUGAR!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/seccion">Inicio</Nav.Link>
              <Nav.Link href="/reservas">Reservas</Nav.Link>
              <Nav.Link href="/registro">Registro</Nav.Link>
              <NavDropdown title="Nuestras propuestas" id="basic-nav-dropdown">
                <NavDropdown.Item href="/eventos">Cumpleaños y festejos</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
};

export default Header;