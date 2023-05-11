import React, { useState, useEffect } from "react";
import UserList from "../components/gymuser/gymuserlist.component";
import SearchBox from "../components/gymuser/searchbox.component";


export default function Users() {

    const [gymusers, setGymusers] = useState([]);
    const [searchfield, setSearchfield] = useState("");
  
    const onSearchChange = (event) => {
      setSearchfield(event.target.value);
    };
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => setGymusers(users));
    }, []);
  
    const filteredUsers = gymusers.filter((gymUser) => {
      return gymUser.name.toLowerCase().includes(searchfield.toLowerCase());
    });
  
    if (gymusers.length === 0) {
      return <h1>Betöltés folyamatban...</h1>;
    }
  
    return (
        <div className="text-white m-3 p-3 bg-opacity-10 backdrop-blur-lg rounded-md bg-black">
        <h1 className="text-center font-mono font-extrabold m-5 text-5xl text-blue-100">Users</h1>
  
        <SearchBox searchChange={onSearchChange} />
        <UserList gymUsers={filteredUsers} />
      </div>
    );

}