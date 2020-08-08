import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import bnbLogoOrange from '../img/icons-and-logos/bnb-logo-orange-40px.svg'
import bnbLogoOrangeSmall from '../img/icons-and-logos/bnb-logo-orange-30px.svg'
import useReactResponsive from '../hooks/useReactResponsive'
import {
  BORDER_COLOR,
  BACKGROUND_COLOR,
  HEADER_HEIGHT,
  HEADER_HEIGHT_MOBILE,
  SHADOW,
} from '../constants'
import { Amper, LogoText, NavItemText } from './NavbarStyledComponents'
import { MainText } from '../styles/SharedStyledComponents'

const NavItem = ({ to, children, pathname }) => {
  const selected = pathname ? pathname.toLowerCase() === to : false

  return (
    <Link className="navbar-item" to={to}>
      <NavItemText selected={selected}>{children}</NavItemText>
    </Link>
  )
}

const Navbar = ({ pathname }) => {
  const [navBarActiveClass, setNavBarActiveClass] = useState('')
  const [hamburgerActive, setHamburgerActive] = useState(false)
  const { isMobile } = useReactResponsive()

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
        height: isMobile ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT,
        backgroundColor: BACKGROUND_COLOR,
        borderBottom: `solid ${BORDER_COLOR} 1px`,
      }}
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img
              src={isMobile ? bnbLogoOrangeSmall : bnbLogoOrange}
              alt="BooksAndBuns"
              // Make sure max-height is none to respect the changes to width and height in logo svg
              // Had to do inline style due to bulma styling
              style={{
                maxHeight: 'none',
                filter: `drop-shadow(${SHADOW})`,
                margin: '0 8px',
              }}
            />
            <LogoText>
              books <Amper>&</Amper> buns
            </LogoText>
          </Link>
          {/*                */}
          {/* Hamburger menu */}
          <div
            className={`navbar-burger burger ${navBarActiveClass}`}
            data-target="navMenu"
            onClick={() => toggleHamburger()}
            style={{
              marginTop: '8px',
              marginRight: '8px',
            }}
          >
            <span />
            <span />
            <span />
          </div>
          {/* ------------ */}
          {/*              */}
        </div>
        <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
          <div className="navbar-start has-text-centered">
            <NavItem pathname={pathname} to="/">
              Home
            </NavItem>
            <NavItem pathname={pathname} to="/about">
              About
            </NavItem>
            <NavItem pathname={pathname} to="/editing">
              Editing
            </NavItem>
            <NavItem pathname={pathname} to="/podcasts">
              Podcasts
            </NavItem>
            {/* <NavItem pathname={pathname} to="/blog">Books</NavItem> */}
            <NavItem pathname={pathname} to="/contact">
              Contact
            </NavItem>
            {/* <NavItem pathname={pathname} to="/contact/examples">Form Examples</NavItem> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
