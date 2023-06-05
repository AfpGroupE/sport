import React from "react";
import { Link, useMatch, useResolvedPath, useLocation } from "react-router-dom"


const GymUser = ({ id, username, name, userRole, userEmail, identityNumber,
  firstName, registerDate, dateOfBirth }) => {
  return (
    <div className="text-xl text-blue-100 m-3 text font-mono font-bold bg-white  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
      <div>
        <h2>x: {id}</h2>
        <h2>Felhasználó teljes neve: {username}</h2>
        <p>Belépési név: {name}</p>
        <p>Email: {userEmail}</p>
        <p>Személyi szám: {identityNumber}</p>
        <p>Regisztáció dátuma: {registerDate}</p>
        <p>Születés idő: {dateOfBirth}</p>    
        <p>userRole: {userRole}</p>
        <td>
          <Link to="/edit" >
          <button className="bg-orange-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >Szerkeszt</button> 
          </Link>   
        </td>
        <td>
          <button className="bg-orange-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => alert(id)}>Töröl</button> 
        </td>
      </div>
    </div>
  );
};

export default GymUser;

