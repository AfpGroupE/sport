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
import Edit from "./pages/Edit"
import NewUser from "./pages/Newuser"
import Privacy from "./pages/Privacy"
import Egeszsegtudatos from "./pages/Egeszsegtudatos"
import { Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import CookieConsent from "react-cookie-consent";

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
        <Route path="/egeszsegtudatos" element={<Egeszsegtudatos />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/users" element={<Users />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/newuser" element={<NewUser />} />
      </Routes>
    </div>
    {/* <div>
        {(typeof backendData.users === 'undefined') ? (
          <p>Loading...</p>
        ): (
            backendData.users.map((user, i) => (
              <p key={i}>{user}</p>
            ))
        )}        
    </div> */}
    <CookieConsent
        buttonText={"Elfogad"}
        buttonClasses={"primary"}
        containerClasses="containerCookie"
        contentClasses="messageCookie"
      >
        <p>
          <strong>A felhasználói élmény fokozása érdekében cookie-kat használunk. </strong>
          <span>
            {" "}
            Weboldalunk használatával Ön hozzájárul a cookie-k használatához.{" "}
          </span>
          <a href="/Privacy"><u>Tudj meg többet</u></a>.
        </p>
      </CookieConsent>
    <Footer/>
  </>




  )
}

export default App