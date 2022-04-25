import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { 
  Nav,
  NavLogo, 
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './Navbar.elements'

export const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    
  <div>
        <Nav>
          <NavMenu>
            <NavLogo to="/">
              <NavIcon />
              Jason Moore
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}></NavMenu>

              <NavItem>
                <NavLinks>
                  <Link to="/about">About</Link>
                </NavLinks>
              </NavItem>

              <NavItem>
                <NavLinks>
                  <Link to="/projects">Porfolio</Link>
                </NavLinks>
              </NavItem>
            
              <NavItem>
                <NavLinks>
                  <Link to="/contact">Contact</Link>
                </NavLinks>
              </NavItem>
            
              <NavItem>
                <NavLinks>
                  <Link to="/resume">Resume</Link>
                </NavLinks>
              </NavItem>
            </NavMenu>
        </Nav>
  </div>
  )
};