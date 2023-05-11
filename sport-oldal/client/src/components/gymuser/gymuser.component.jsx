import React from "react";

const GymUser = ({ id, username, name, userRole, userEmail, identityNumber,
  firstName, middleName, dateOfBirth }) => {
  return (
    <div className="text-xl text-blue-100 m-3 text font-mono font-bold bg-white  bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
      <div>
        <h2>{name}</h2>
        <p>Felhasználó neve: {username}</p>
        <p>Neve: {name}</p>
        <p>Email: {userEmail}</p>
        <p>Személyi szám: {identityNumber}</p>
        <p>First: {firstName}</p>
        <p>Második név: {middleName}</p>
        <p>Születésnap: {dateOfBirth}</p>       

      </div>
    </div>
  );
};

export default GymUser;
