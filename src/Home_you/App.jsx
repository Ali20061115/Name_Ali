import{BrowserRouter as Router,Routes,Route}
 from "react-router-dom"
import Navbar from './Navbar'
import { useState } from 'react'
import ProtectedRoutes from './Protected_Routes'
import Home_Page from "./Home_Page"
import BookDetail from './Book_Detail'
import Book_gallery from './Book_gallery'
import Login from './Login'
function App() {
  const[isAuthenticated, setAuthenticated] = useState(false)
    return(

  <Router>
   <Routes >
  <Route path="/"  element={<Login setIsAuthenticated={setAuthenticated}/>}/>
<Route path="/home" element={<ProtectedRoutes isAuthenticated={isAuthenticated}>
  <Home_Page/>
</ProtectedRoutes>}></Route> 
<Route path="/book_gallery" element={<ProtectedRoutes isAuthenticated={isAuthenticated}>
  <Book_gallery/>
</ProtectedRoutes>}></Route>

<Route path="/book_detail" element={<ProtectedRoutes isAuthenticated={isAuthenticated}>
  <BookDetail/>
</ProtectedRoutes>}></Route>

      </Routes>
 </Router>

    );
}

export default App