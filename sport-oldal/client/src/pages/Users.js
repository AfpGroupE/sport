import React, { useState, useEffect } from "react";
import UserList from "../components/gymuser/gymuserlist.component";
import SearchBox from "../components/gymuser/searchbox.component";
import { Link } from "react-router-dom"



export default function Users() {

  const [gymusers, setGymusers] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/getalluser")
      .then((response) => response.json())
      .then((users) => setGymusers(users));
  }, []);
 

  const filteredUsers = gymusers.filter((gymUser) => {
    return gymUser.user_role >= 1 & gymUser.user_nev.toLowerCase().includes(searchfield.toLowerCase());
  });


  if (gymusers.length === 0) {
    return <h1>Betöltés folyamatban...</h1>;
  }

  
  return (
      <div className="text-white m-3 p-3 bg-opacity-10 backdrop-blur-lg rounded-md bg-black">
      <h1 className="text-center font-mono font-extrabold m-5 text-3xl text-blue-100">Felhasználók listája</h1>
      
      <Link to="/newuser" >
      <button className="p-4 m-4 bg-cyan-500 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" >Új felhasználó hozzáadása</button>
      </Link>

      <SearchBox searchChange={onSearchChange} />
      <UserList gymUsers={filteredUsers} />
    </div>
  );
}