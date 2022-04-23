import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks 
} from './Navbar.elements'

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

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
            <NavMenu onClick={handleClick}>
              <NavItem>
                <NavLinks to='/'>
                  About
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavMenu onClick={handleClick}>
              <NavItem>
                <NavLinks to='/Portfolio'>
                  Portfolio
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavMenu onClick={handleClick}>
              <NavItem>
                <NavLinks to='/Contact'>
                  Contact
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavMenu onClick={handleClick}>
              <NavItem>
                <NavLinks to='/Resume'>
                  Resume
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
        </IconContext.Provider>
    </div>
  )
}

export default Navbar