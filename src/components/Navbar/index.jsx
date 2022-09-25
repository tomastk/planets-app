import React from 'react'
import {NavLink as Link} from 'react-router-dom';
import './index.css'

const Navbar = ({showed}) => {
  const navBarClassName = showed ? 'active' : '';

  return (
    <nav className="nav">
      <ul className={navBarClassName}>
        <h2 className="only-mobile menu-heading">Planetas</h2>
        <li>
          <Link to="/mercurio" className="nav-a" activeClassName="active">Mercurio</Link>
        </li>
        <li>
          <Link to="/venus" className="nav-a" activeClassName="active">Venus</Link>
        </li>
        <li>
          <Link to="/tierra" className="nav-a" activeClassName="active">Tierra</Link>
        </li>
        <li>
          <Link to="/marte" className="nav-a" activeClassName="active">Marte</Link>
        </li>
        <li>
          <Link to="/jupiter" className="nav-a" activeClassName="active">Jupiter</Link>
        </li>
        <li>
          <Link to="/saturno" className="nav-a" activeClassName="active">Saturno</Link>
        </li>
        <li>
          <Link to="/urano" className="nav-a" activeClassName="active">Urano</Link>
        </li>
        <li>
          <Link to="/neptuno" className="nav-a" activeClassName="active">Neptuno</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;