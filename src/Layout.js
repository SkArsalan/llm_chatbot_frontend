import "./Layout.css"
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Content from './Content';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Layout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="app">
      {/* Use full height on the main container */}
      <div className="d-flex flex-column vh-100">
        
        {/* Navbar Wrapper */}
        <div className="navbar-wrapper">
          <Navbar toggleSidebar={toggleSidebar} />
        </div>
        {/* Main container, flex-grow to allow it to expand */}
        <div className="d-flex flex-grow-1">
        
          <Sidebar isOpen={sidebarOpen} />
          
          {/* Content section with mt-auto to push it to the bottom */}
          <div className="flex-grow-1 d-flex flex-column">
            <div className="mt-auto">
              <Content isSidebarOpen={sidebarOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;
