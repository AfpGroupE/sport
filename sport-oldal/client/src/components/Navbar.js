import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React from 'react'

export default function Navbar() {
  return (
    <nav className="p-4 flex shadow text-white bg-transparent ">
      <Link to="/" className="text-2xl font-bold">
        Gym Center
      </Link>
      <ul className="font-bold flex">
        <CustomLink className="m-2 flex" to="/gallery">Galéria</CustomLink>
        <CustomLink className="m-2 flex" to="/video">Videók</CustomLink>
        <CustomLink className="m-2 flex" to="/pricing">Árlista</CustomLink>
        <CustomLink className="m-2 flex" to="/diet">Étrendek</CustomLink>
        <CustomLink className="m-2 flex" to="/workout">Edzéstervek</CustomLink>
        <CustomLink className="m-2 flex" to="/news">Hírek</CustomLink>
        <CustomLink className="m-2 flex" to="/about">Rólunk</CustomLink>        
        <CustomLink className="m-2 flex" to="/register">Regisztráció</CustomLink>        
        <CustomLink className="m-2 flex" to="/users">Felhasználók</CustomLink>
        <CustomLink className="m-2 flex" to="/employees">Alkalmazottak</CustomLink>
        <CustomLink className="m-2 flex" to="/login">Belépés</CustomLink>
        <CustomLink className="m-2 flex" to="/logout">Kijelentkezés</CustomLink>
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
