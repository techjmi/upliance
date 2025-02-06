import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser');
    setIsLoggedIn(!!currentUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    setDropdownOpen(false);
    window.location.href = '/login';
  };

  return (
    <nav className="sticky top-0 w-full p-4 z-20 bg-slate-600">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">LOGO</Link>

        <div className="hidden md:flex space-x-6 text-white">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/text" className="hover:underline">Text</Link>
          <Link to="/user" className="hover:underline">User Data</Link>
          {isLoggedIn && <Link to="/dashboard" className="hover:underline">Dashboard</Link>}
        </div>

        <div className="flex items-center gap-4">
          {isLoggedIn ? (
            <div className="relative">
              <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-white">
                <FaUserCircle size={30} />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md p-2">
                  <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>
                    Profile
                  </Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/login" className="px-4 py-2 text-white hover:bg-slate-700 rounded">Login</Link>
            </div>
          )}
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden flex min-h-screen">
          <div className="bg-slate-600 w-64 h-full p-4">
            <button onClick={() => setIsOpen(false)} className="text-white mb-4">
              <FaTimes size={24} />
            </button>
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/about" className="hover:underline">About</Link>
              <Link to="/services" className="hover:underline">Services</Link>
              <Link to="/contact" className="hover:underline">Contact</Link>
              <Link to="/text" className="hover:underline">Text</Link>
              <Link to="/user" className="hover:underline">User Data</Link>
              {isLoggedIn && <Link to="/dashboard" className="hover:underline">Dashboard</Link>}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
