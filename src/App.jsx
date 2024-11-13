import './App.css'
import Menu1 from './pages/Menu1'
import Menu2 from './pages/Menu2'
import Menu3 from './pages/Menu3'
import Menu4 from './pages/Menu4'
import Menu5 from './pages/Menu5'
import Menu6 from './pages/Menu6'
import Navbar from './Components/Navbar'
import Login from './pages/Login'
import SmoothScroll from './Components/smoothscroll'
import Register from './pages/Register'
import AllFacilities from './pages/AllFacilities'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SmoothScroll>
        <div className="app-container">
          <Navbar />
          <div className="content-wrapper pt-14">
            <Routes>
              <Route path="/" element={<Menu1 />} />
              <Route path="/Menu2" element={<Menu2 />} />
              <Route path="/Menu2/all" element={<AllFacilities />} />
              <Route path="/Menu3" element={<Menu3 />} />
              <Route path="/Menu4" element={<Menu4 />} />
              <Route path="/Menu5" element={<Menu5 />} />
              <Route path="/Menu6" element={<Menu6 />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </SmoothScroll>
    </BrowserRouter>
  )
}

export default App
