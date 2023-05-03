import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom"
import React from 'react'

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="flex items-center">
        <span className="text-green-500 font-bold">GYM Center</span>
      </Link>
        <ul className="flex space-x-4">
          <CustomLink to="/gallery" location={location}>
            Galéria
          </CustomLink>
          <CustomLink to="/video" location={location}>
            Videók
          </CustomLink>
          <CustomLink to="/pricing" location={location}>
            Árlista
          </CustomLink>
          <CustomLink to="/diet" location={location}>
            Étrendek
          </CustomLink>
          <CustomLink to="/workout" location={location}>
            Edzéstervek
          </CustomLink>
          <CustomLink to="/news" location={location}>
            Hírek
          </CustomLink>
          <CustomLink to="/about" location={location}>
            Rólunk
          </CustomLink>
          <CustomLink to="/register" location={location}>
            Regisztráció
          </CustomLink>
          <CustomLink to="/users" location={location}>
            Felhasználók
          </CustomLink>
          <CustomLink to="/employees" location={location}>
            Alkalmazottak
          </CustomLink>
          <CustomLink to="/login" location={location}>
            Belépés
          </CustomLink>
          <CustomLink to="/logout" location={location}>
            Kijelentkezés
          </CustomLink>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ to, location, children }) {
  const isActive = location.pathname === to;

  return (
    <li className={isActive ? "border-b-2 border-white" : ""}>
      <Link
        to={to}
        className={`text-green-500 font-medium ${
          isActive ? "hover:text-green-500" : "hover:text-white"
        }`}
      >
        {children}
      </Link>
    </li>
  );
}
