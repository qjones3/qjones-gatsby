import * as React from 'react';
import { Link } from 'gatsby';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Menu: React.FC = () => {
  return (
    <Nav className="me-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      <Nav.Link as={Link} to='/about'>About</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item as={Link} to='/'>
          First Link
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/'>
          Second Link
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to='/'>
          Third Link
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item as={Link} to='/'>
          Fourth Link
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )
}

export default Menu