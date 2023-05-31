import React, { useState } from 'react';

export default function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameOrEmailChange = (e) => {
    setUsernameOrEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Itt kezeld a bejelentkezési adatok beküldését vagy feldolgozását
    console.log('Bejelentkezés elküldve:', usernameOrEmail, password);
    // További logika vagy API hívások itt...
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3 bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Bejelentkezés</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="usernameOrEmail" className="block font-bold mb-2">
              Email/Felhasználónév
            </label>
            <input
              type="text"
              id="usernameOrEmail"
              className="w-full border border-gray-300 rounded py-2 px-3"
              value={usernameOrEmail}
              onChange={handleUsernameOrEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2">
              Jelszó:
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded py-2 px-3"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Bejelentkezés
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
