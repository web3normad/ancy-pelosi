import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home"
import './App.css'

function App() {

  return (
    <Router>
      <div>
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/home" element={<Home />} />
      </Routes>
      </div>
      </Router>

  )
}

export default App
