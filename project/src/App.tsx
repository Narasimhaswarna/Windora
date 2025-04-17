import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Wind, Leaf, Sun, BarChart3, ArrowRight } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 py-4">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Wind className="text-green-600 h-8 w-8" />
              <span className="text-2xl font-bold">Windora</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-green-600">About</Link>
              <Link to="/services" className="text-gray-600 hover:text-green-600">Services</Link>
              <Link to="/contact" className="text-gray-600 hover:text-green-600">Contact</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/signin" className="text-gray-600 hover:text-green-600">Sign In</Link>
              <Link to="/signup" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">
                Get Started
              </Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;