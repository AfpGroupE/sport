import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Gallery from "./pages/Gallery"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import Video from "./pages/Video"
import Diet from "./pages/Diet"
import Workout from "./pages/Workout"
import News from "./pages/News"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Logout from "./pages/Logout"
import Users from "./pages/Users"
import Employees from "./pages/Employees"
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
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/video" element={<Video />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/users" element={<Users />} />
        <Route path="/employees" element={<Employees />} />
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
    <Footer/>
  </>




  )
}

export default App