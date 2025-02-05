// src/components/Navbar.js
import React from 'react';

import './Navbar.css';

function Navbar({ toggleSidebar }) {
  return (
    <nav className="navbar">
      <button 
        type="button" 
        className="btn btn-info" 
        onClick={toggleSidebar}
      >
         {/* Sidebar toggle icon */}
         <i class="bi bi-list"></i>
      </button>
      <div className="navbar-title">ChatBot</div>
    </nav>
  );
}

export default Navbar;
