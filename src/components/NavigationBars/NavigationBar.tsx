import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LogoutButton from '../Buttons/LogoutButton';

const StyledNavbar = styled(Navbar)`
  background-color: #f8f9fa;
`;

const StyledNav = styled(Nav)`
  .nav-link {
    cursor: pointer;
  }
`;

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledNavbar expand="lg">
      <Container>
        <StyledNavbar.Brand></StyledNavbar.Brand>
        <StyledNavbar.Toggle />
        <StyledNavbar.Collapse id="basic-navbar-nav">
          <StyledNav>
            <Nav.Link onClick={() => navigate('/home')}>Home</Nav.Link>
            <NavDropdown title="Servos" id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('/cadastrar-servo')}>Criar Servo</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/meus-servos')}>Visualizar meus Servos</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Batalhas" id="collapsible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('/cadastrar-batalha')}>Criar Batalha</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/batalhas')}>Visualizar Batalhas</NavDropdown.Item>
            </NavDropdown>
          </StyledNav>
        </StyledNavbar.Collapse>
        <LogoutButton />
      </Container>
    </StyledNavbar>
  );
};

export default NavigationBar;
