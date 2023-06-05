import React from "react";
import GymUser from "./gymuser.component";

const GymUserList = ({ gymUsers }) => {
  return (
    <div>
      {gymUsers.map((user) => {
        return (
          <GymUser
            key={user.iduser}
            id={user.iduser}
            username={user.user_nev}
            name={user.user_felhasznalo_nev}  
            userEmail={user.e_mail}
            identityNumber={user.user_szem_szam}
            dateOfBirth={user.user_szul_ido.substring(0, 10).replaceAll("-", ".")}
            userRole={user.user_role}
            registerDate={user.reg_datum.substring(0, 10).replaceAll("-", ".")}  
          />
        );
      })}
    </div>
  );
};

export default GymUserList;

