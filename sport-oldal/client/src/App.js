import Navbar from "./Navbar"
import Galery from "./pages/Galery"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from 'react'

function App () {

const [backendData, setBackendData] = useState([{}])

useEffect(() => {
fetch("/api").then(
  response => response.json()
).then(
  data => {
    setBackendData(data)
  }
)
}, [])

  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
    <div>
        {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ): (
            backendData.users.map((user, i) => (
              <p key={i}>{user}</p>
            ))
        )}        
    </div>
  </>




  )
}

export default App