import React from 'react'
import { Link } from 'gatsby'
import bnbLogo from '../img/bnb-logo-black.svg'
import { BORDER_COLOR, BACKGROUND_COLOR, HEADER_HEIGHT } from '../constants'
import { MainText } from '../styles/SharedStyledComponents'

const NavBarItem = ({ to, children }) => {
  return (
    <Link className="navbar-item" to={to}>
      <MainText>{children}</MainText>
    </Link>
  )
}

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
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
          height: HEADER_HEIGHT,
          backgroundColor: BACKGROUND_COLOR,
          borderBottom: `solid ${BORDER_COLOR} 1px`,
        }}
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={bnbLogo} alt="BooksAndBuns" style={{ width: '88px' }} />
            </Link>
            {/*                */}
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
            {/* ------------ */}
            {/*              */}
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <NavBarItem to="/products">About</NavBarItem>
              <NavBarItem to="/about">Editing</NavBarItem>
              <NavBarItem to="/blog">Podcasts</NavBarItem>
              <NavBarItem to="/blog">Books</NavBarItem>
              <NavBarItem to="/contact">Contact</NavBarItem>
              <NavBarItem to="/contact/examples">Form Examples</NavBarItem>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
