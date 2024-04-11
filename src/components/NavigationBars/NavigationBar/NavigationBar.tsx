import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoutButton from '../../Buttons/LogoutButton/LogoutButton';
import { NavDropdown } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="home">Home</Nav.Link>
            <NavDropdown title="Servos" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="cadastrar-servo">Criar Servo</NavDropdown.Item>
              <NavDropdown.Item href="meus-servos"> Visualizar meus Servos </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Batalhas" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="cadastrar-batalha">Criar Batalha</NavDropdown.Item>
              <NavDropdown.Item href="batalhas"> Visualizar Batalhas </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <LogoutButton />
      </Container>
    </Navbar>
  )
}

export default NavigationBar