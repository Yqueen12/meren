// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Siginin from './pages/Siginin'
import SignUp from './pages/SignUp'
import About from './pages/About'
import Profile from './pages/Profile'
import Headers from './components/Header'

const Login = () => {
  return (
    <Router>
      <Headers/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/sign-in" element={<Siginin/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </Router>
  )
}

export default Login