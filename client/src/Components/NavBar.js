import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <Navbar light expand="md">
      <Nav>
        <NavItem>
          <Link to="/projects" className="nav-link">
            <Button className="nav-button">Projects</Button>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/tasks" className="nav-link">
            <Button className="nav-button">Tasks</Button>
          </Link>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;

