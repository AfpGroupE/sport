import React, { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Itt kezeld a regisztrációs adatok beküldését vagy feldolgozását
    console.log('Regisztráció elküldve:', email,username, password);
    // További logika vagy API hívások itt...
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/3 bg-white p-8 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Regisztráció</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              Email cím:
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded py-2 px-3"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block font-bold mb-2">
              Felhasználónév:
            </label>
            <input
              type="text"
              id="username"
              className="w-full border border-gray-300 rounded py-2 px-3"
              value={username}
              onChange={handleUsernameChange}
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
              Regisztráció
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
