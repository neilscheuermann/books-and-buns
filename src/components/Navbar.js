import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import bnbLogoOrange from '../img/icons-and-logos/bnb-logo-orange-40px.svg'
import bnbLogoOrangeSmall from '../img/icons-and-logos/bnb-logo-orange-30px.svg'
import bnbLogoBlack from '../img/icons-and-logos/bnb-logo-black-40px.svg'
import bnbLogoBlackSmall from '../img/icons-and-logos/bnb-logo-black-30px.svg'
import bnbLogoWhite from '../img/icons-and-logos/bnb-logo-white-40px.svg'
import bnbLogoWhiteSmall from '../img/icons-and-logos/bnb-logo-white-30px.svg'
import useReactResponsive from '../hooks/useReactResponsive'
import {
  BORDER_COLOR,
  BACKGROUND_COLOR,
  COLOR_ORANGE,
  HEADER_HEIGHT,
  HEADER_HEIGHT_MOBILE,
  SHADOW,
} from '../constants'
import {
  Amper,
  LogoText,
  NavMenu,
  NavItemText,
  NavItemsWrapper,
  NavbarContentWrapper,
  StyledLink,
} from './NavbarStyledComponents'
import { MainText } from '../styles/SharedStyledComponents'

const NavItem = ({ to, children, pathname }) => {
  const selected = pathname ? pathname.toLowerCase() === to : false

  return (
    <StyledLink className="navbar-item" to={to}>
      <NavItemText selected={selected}>{children}</NavItemText>
    </StyledLink>
  )
}

const Navbar = ({ pathname }) => {
  const [navBarActiveClass, setNavBarActiveClass] = useState('')
  const [hamburgerActive, setHamburgerActive] = useState(false)
  const { isMobile } = useReactResponsive()
  const [isMobileTemp, setIsMobileTemp] = useState('')
  useEffect(() => {
    setIsMobileTemp(isMobile)
  }, [isMobile])
  useEffect(() => {
    hamburgerActive ? setNavBarActiveClass('is-active') : setNavBarActiveClass()
  }, [hamburgerActive])

  const toggleHamburger = () => {
    setHamburgerActive(!hamburgerActive)
  }

  return (
    <nav
      className="navbar is-transparent"
      role="navigation"
      aria-label="main-navigation"
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: isMobileTemp ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT,
        backgroundColor: COLOR_ORANGE,
        borderBottom: `solid ${BORDER_COLOR} 1px`,
      }}
    >
      {/* <div className="container"> */}
      <NavbarContentWrapper className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img
              src={isMobileTemp ? bnbLogoWhiteSmall : bnbLogoWhite}
              alt="BooksAndBuns"
              // Make sure max-height is none to respect the changes to width and height in logo svg
              // Had to do inline style due to bulma styling
              style={{
                maxHeight: 'none',
                margin: '0 8px',
              }}
            />
            <LogoText>
              Books <Amper>&</Amper> Buns
            </LogoText>
          </Link>
          {/*                */}
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
            style={{
              marginTop: '16px',
              marginRight: '16px',
              color: 'white',
            }}
          >
            <span />
            <span />
            <span />
          </div>
          {/* ------------ */}
          {/*              */}
        </div>
        <NavMenu id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <NavItemsWrapper
            className={isMobileTemp ? 'navbar-start has-text-centered' : ''}
          >
            <NavItem pathname={pathname} to="/">
              Home
            </NavItem>
            <NavItem pathname={pathname} to="/editing">
              Editing
            </NavItem>
            <NavItem pathname={pathname} to="/podcasts">
              Podcasts
            </NavItem>
            {/* <NavItem pathname={pathname} to="/blog">Books</NavItem> */}
            <NavItem pathname={pathname} to="/contact">
              Connect
            </NavItem>
            {/* <NavItem pathname={pathname} to="/contact/examples">Form Examples</NavItem> */}
          </NavItemsWrapper>
        </NavMenu>
      </NavbarContentWrapper>
    </nav>
  )
}

export default Navbar
