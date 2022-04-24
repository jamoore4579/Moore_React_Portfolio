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

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
            <NavLogo to="/">
              <NavIcon />
              JAM
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>
                  About
                </NavLinks>
              </NavItem>
    
              <NavItem>
                <NavLinks to='/Portfolio'>
                  Portfolio
                </NavLinks>
              </NavItem>
            
              <NavItem>
                <NavLinks to='/Contact'>
                  Contact
                </NavLinks>
              </NavItem>
            
              <NavItem>
                <NavLinks to='/Resume'>
                  Resume
                </NavLinks>
              </NavItem>
            </NavMenu>

        </Nav>
        </IconContext.Provider>
    </div>
  )
}

export default Navbar