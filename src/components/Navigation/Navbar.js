import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavContainer,
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
  const closeMobileMenu = () => setClick(false);

  return (
  <>
    <IconContext.Provider value={{ color: '#fff' }}>
    <Nav>
      <NavContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon />
            Jason Moore
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>

          <NavItem>
            <NavLinks to="/about" onClick={closeMobileMenu}>
              About
            </NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="/projects" onClick={closeMobileMenu}>
              Porfolio
            </NavLinks>
          </NavItem>
        
          <NavItem>
            <NavLinks to="/contact" onClick={closeMobileMenu}>
              Contact
            </NavLinks>
          </NavItem>
        
          <NavItem>
            <NavLinks to="/resume" onClick={closeMobileMenu}>
              Resume
            </NavLinks>
          </NavItem>
        </NavMenu>
      </NavContainer>
    </Nav>
    </IconContext.Provider>
  </>
  )
};