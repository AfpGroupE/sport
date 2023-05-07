import React from 'react'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-4xl font-bold mb-6 text-white">Kapcsolatok</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-400 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Email</h2>
          <p className="mb-4">gymcenter@example.com</p>
        </div>
        <div className="bg-gray-400 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Telefon</h2>
          <p className="mb-4">+36 1 234 5678</p>
        </div>
        <div className="bg-gray-400 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Cím</h2>
          <p className="mb-4">Budapest, Kossuth tér 1.</p>
        </div>
      </div>
      <div className="flex space-x-4 mt-6">
        <a
          href="#"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
        >
          Facebook
        </a>
        <a
          href="#"
          className="bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg"
        >
          Twitter
        </a>
        <a
          href="#"
          className="bg-yellow-500 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg"
          >
          Instagram
        </a>
        <a
          href="#"
          className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 rounded-lg"
          >
          YouTube
        </a>
      </div>
    </div>
  );       
}
