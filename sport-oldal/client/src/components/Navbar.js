import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from 'react'

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Gym Center
      </Link>
      <ul>
        <CustomLink to="/gallery">Galéria</CustomLink>
        <CustomLink to="/video">Videók</CustomLink>
        <CustomLink to="/pricing">Árlista</CustomLink>
        <CustomLink to="/diet">Étrendek</CustomLink>
        <CustomLink to="/workout">Edzéstervek</CustomLink>
        <CustomLink to="/news">Hírek</CustomLink>
        <CustomLink to="/about">Rólunk</CustomLink>
        <CustomLink to="/login">Belépés</CustomLink>
        <CustomLink to="/register">Regisztráció</CustomLink>
        <CustomLink to="/logout">Kijelentkezés</CustomLink>
        <CustomLink to="/users">Felhasználók</CustomLink>
        <CustomLink to="/employees">Alkalmazottak</CustomLink>
      </ul>
        
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
