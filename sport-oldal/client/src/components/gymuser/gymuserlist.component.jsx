import React from "react";
import GymUser from "./gymuser.component";

const GymUserList = ({ gymUsers }) => {
  return (
    <div>
      {gymUsers.map((user) => {
        return (
          <GymUser
            key={user.id}
            id={user.id}
            username={user.username}
            name={user.name}
            userRole={user.website}
            userEmail={user.email}
            identityNumber={user.phone}            
            firstName="firstname"
            middleName="middlename"
            dateOfBirth={user.address.street}
          />
        );
      })}
    </div>
  );
};

export default GymUserList;
