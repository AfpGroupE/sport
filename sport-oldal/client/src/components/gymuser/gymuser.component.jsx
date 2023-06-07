//import React from "react";
import React from "react";
import { Link } from "react-router-dom"

const GymUser = ({ id, username, name, userRole, userEmail, identityNumber,
  firstName, registerDate, dateOfBirth }) => {

  const valami = (id) => {
    fetch('/api/v1/delusers/' + id, {
      method: 'DELETE'
    }).then(() => {
      window.location.reload(false);
      alert(id + ' számú felhasználó törölve');
    })
  };

  return (
    <div className="text-s text-black m-3 text font-mono 
    font-bold bg-white  bg-opacity-70 backdrop-blur-lg rounded drop-shadow-lg">
      <div className="">
        <tr className="text-neutral-600 ">
          <td className="p-2 m-2">Név: </td>
          <td className="p-2 m-2">Felhasznló név: </td>
          <td className="p-2 m-2">Email: </td>
          <td className="p-2 m-2">Személyi szám: </td>
          <td rowspan="2" className="p-2 m-2">
          <Link to="/edit" state={{
              id, username, name, userRole, userEmail, identityNumber,
              firstName, registerDate, dateOfBirth
            }}>
              <button className="w-28 bg-green-700 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >Szerkeszt</button>
            </Link>
          </td>
        </tr>
        <tr >
          <td className="p-2 m-2">{username}</td>
          <td className="p-2 m-2">{name}</td>
          <td className="p-2 m-2">{userEmail}</td>
          <td className="p-2 m-2">{identityNumber}</td>

        </tr>

        <tr className="text-neutral-600 ">
          <td className="p-2 m-2">Regisztáció dátuma: </td>
          <td className="p-2 m-2">Születés idő: </td>
          <td className="p-2 m-2">userRole: </td>
          <td className="p-2 m-2"></td>
          <td rowspan="2" className="p-2 m-2 ">
            <button className= "w-28 bg-red-600 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={() => valami(id)}>Töröl</button>
          </td>   
        </tr>

        <tr>
          <td className="p-2 m-2">{registerDate}</td>
          <td className="p-2 m-2">{dateOfBirth}</td>
          <td className="p-2 m-2">{userRole}</td>
          <td></td>

        </tr>


      </div>
    </div>
  );
};

export default GymUser;

