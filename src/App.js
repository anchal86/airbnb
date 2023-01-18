import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import AirbnbHome from './pages/AirbnbHome'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Header from './components/Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/airbnb-home' element={<AirbnbHome />} />
      </Routes>
    </Router>
  );
}

export default App;
