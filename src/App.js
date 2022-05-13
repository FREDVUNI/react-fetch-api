import React from "react"
import "./App.css"
import NavBar from './components/NavBar'
import Home from './components/Home'
import Quotes from './components/Quotes'
import Users from './components/Users'

import { BrowserRouter as Router,Routes,Route } from "react-router-dom"

const App = () =>{
    return(
        <div className="app">
            <Router>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/quotes' element={<Quotes/>}/>
                    <Route path='/users' element={<Users/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App

