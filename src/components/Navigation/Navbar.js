import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from './Navbar.elements'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()    
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
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
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/resume">
                      <Button primary>Download Resume</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/resume">
                    <Button fontBig primary>
                      Download Resume
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </div>
  )
}

export default Navbar