
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './Home'
import About from './About'
import Contact from "./Contact"
import Navbar from './Navbar'
import "./App.css"
import Posts from "./Posts"
import PostDetails from "./PostDetails"
import Protected_Routes from "./Protected_Routes"
import Dashboard from './Dashboard'
import Login from './Login'
import { useState } from "react"

function App() {

    const [isAutheticated, setIsAutheticated] = useState(false);

    return (
       <BrowserRouter>
       <Routes>
       <Route 
        path="/"
        element ={<Login setIsAuthenticated={setIsAutheticated}/>}/>
        <Route 
        path="/login"
        element ={<Login setIsAuthenticated={setIsAutheticated}/>}/>

        <Route path="/dashboard"
        element={
            <Protected_Routes isAutheticated={isAutheticated}>
            <Dashboard/>
            </Protected_Routes>}/>

       </Routes>
       </BrowserRouter> 
    )
}


export default App