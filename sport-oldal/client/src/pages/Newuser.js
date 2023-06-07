import { useState } from "react";


const Newuser = () => {

  const [user_Nev, setuser_Nev] = useState('');
  const [user_felhasznalo_nev, setuser_felhasznalo_nev] = useState('');
  const [user_szul_ido, setuser_szul_ido] = useState('');
  const [userSzemSzam, setuserSzemSzam] = useState('');
  const [jelszo, setjelszo] = useState('');
  const [e_mail, sete_mail] = useState('');
  const [user_role, setuser_role] = useState('1');

  const handleSubmit = (e) => {
    e.preventDefault();

    const inputUserData = {
      userSzemSzam, user_Nev, user_szul_ido,
      user_felhasznalo_nev, jelszo, e_mail, user_role
    };

    var date_regex = /^(19|20)\d{2}\.(0[1-9]|1[0-2])\.(0[1-9]|1\d|2\d|3[01])$/;

    if ((date_regex.test(user_szul_ido))) {
      fetch('http://localhost:5000/api/v1/adduser', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputUserData)
      }).then(() => {
        alert("Új felhasználó hozzáadva");
        console.log('new user added');
      })
    }
    else {
      alert("Dátum formátuma nem jó!")
    }
  }

  return (
    <div className="text-white m-3 p-3 bg-opacity-80 backdrop-blur-lg rounded-md bg-white">
      <h1 className="text-center font-mono font-extrabold m-5 text-5xl text-red-900">Új felhasználó</h1>
     
      <form className="grid gap-6 mb-6 md:grid-cols-2" onSubmit={handleSubmit}>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Név:</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            required
            value={user_Nev}
            placeholder="Teljes név..."
            onChange={(e) => setuser_Nev(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Felhasználónév:</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                      focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                      dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            required
            value={user_felhasznalo_nev}
            placeholder="A felhasználó azonosító neve..."
            onChange={(e) => setuser_felhasznalo_nev(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Születési dátum:</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            required
            value={user_szul_ido}
            placeholder="Dátum formátuma: 1986.02.02"
            onChange={(e) => setuser_szul_ido(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Személyi szám:</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            required
            value={userSzemSzam}
            placeholder="Személyi azonosító szám...."
            onChange={(e) => setuserSzemSzam(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Jelszó:</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            required
            value={jelszo}
            placeholder="*****"
            onChange={(e) => setjelszo(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email cím:</label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="text"
            required
            value={e_mail}
            placeholder="Formátuma: valami@valami.com"
            onChange={(e) => sete_mail(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Szerepkör:</label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
          focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
          dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={user_role}
            onChange={(e) => setuser_role(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <div className="grid justify-items-center" >
            <button className="m-5 p-2 bg-green-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Új felhasználó hozzáadása</button>
          </div>

        </div>

      </form>
    </div>
  );
}

export default Newuser;