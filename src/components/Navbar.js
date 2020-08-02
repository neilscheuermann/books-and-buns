import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import bnbLogo from '../img/bnb-logo-black.svg'
import useReactResponsive from '../hooks/useReactResponsive'
import {
  BORDER_COLOR,
  BACKGROUND_COLOR,
  HEADER_HEIGHT,
  HEADER_HEIGHT_MOBILE,
} from '../constants'
import { Amper, LogoText } from './navbarStyledComponents'
import { MainText } from '../styles/SharedStyledComponents'

const NavBarItem = ({ to, children }) => {
  return (
    <Link className="navbar-item" to={to}>
      <MainText>{children}</MainText>
    </Link>
  )
}

const Navbar = () => {
  const [navBarActiveClass, setNavBarActiveClass] = useState('')
  const [active, setActive] = useState(false)
  const { isTabletOrMobile } = useReactResponsive()

  useEffect(() => {
    active ? setNavBarActiveClass('is-active') : setNavBarActiveClass()
  }, [active])

  const toggleHamburger = () => {
    setActive(!active)
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
        height: isTabletOrMobile ? HEADER_HEIGHT_MOBILE : HEADER_HEIGHT,
        backgroundColor: BACKGROUND_COLOR,
        borderBottom: `solid ${BORDER_COLOR} 1px`,
      }}
    >
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img src={bnbLogo} alt="BooksAndBuns" style={{ width: '58px' }} />
            <LogoText>
              books <Amper>&</Amper> buns
            </LogoText>
          </Link>
          {/*                */}
          {/* Hamburger menu */}
          {/* <div */}
          {/*   className={`navbar-burger burger ${navBarActiveClass}`} */}
          {/*   data-target="navMenu" */}
          {/*   onClick={() => toggleHamburger()} */}
          {/* > */}
          {/*   <span /> */}
          {/*   <span /> */}
          {/*   <span /> */}
          {/* </div> */}
          {/* ------------ */}
          {/*              */}
        </div>
        {/* <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}> */}
        {/*   <div className="navbar-start has-text-centered"> */}
        {/*     <NavBarItem to="/">Home</NavBarItem> */}
        {/*     <NavBarItem to="/about">About</NavBarItem> */}
        {/*     <NavBarItem to="/editing">Editing</NavBarItem> */}
        {/*     <NavBarItem to="/podcasts">Podcasts</NavBarItem> */}
        {/*     <NavBarItem to="/blog">Books</NavBarItem> */}
        {/*     <NavBarItem to="/contact">Contact</NavBarItem> */}
        {/*     <NavBarItem to="/contact/examples">Form Examples</NavBarItem> */}
        {/*   </div> */}
        {/* </div> */}
      </div>
    </nav>
  )
}

export default Navbar
