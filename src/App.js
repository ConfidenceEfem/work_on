import React from 'react'
import Home from "./components/Home"
import InputCard from "./components/InputCard"
import DetailPage from './components3/DetailPage'
import Header from './components4/Header'
import Register from './components4/Register'
import Login from './components4/Login'
import Create from './components4/Create'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
const App = () => {
  return (
    <div>
     
      {/*<InputCard/>*/}
      
      
      <Router>
      <Header/>
      <Routes>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/create" element={<Create/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App
