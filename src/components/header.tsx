import * as React from 'react';
import { Link } from 'gatsby';
import Menu from './menu';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import * as styles from "./layout/layout.module.css"

interface HeaderProps {
  color?: 'dark' | 'light';
}

const Header: React.FC<HeaderProps> = ({color}) => {
  const theme = color || 'dark';
  return (
    <Container className={`bg-${theme}`} fluid>
      <Container className={`nav ${styles.nav}`}>
        <Navbar bg={theme} expand="lg" variant={theme}>
          <Navbar.Brand as={Link} to='/'>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Menu />
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Container>
  )
}

export default Header
