

// src/components/Sidebar.js
import './Sidenew.css';
import './SidebarContainer/SidebarHeader'
import React, { useState } from 'react';

import SidebarHeader from './SidebarContainer/SidebarHeader';
import SidebarMenu from './SidebarContainer/SidebarMenu';

function Sidebar({ isOpen }) {
 

  return (
    <div id="sidebar" className={isOpen ? 'active' : ''}>
      <SidebarHeader title="Chat History" />
      <ul className="list-unstyled components">
        <p>Main Categories</p>

        
      
      {/* Main Categories */}

      <SidebarMenu
       title="CCTV"
       submenu={[
        { path: '/sales-list', label: 'CCTV Sale' },
        { path: '/purchase-list', label: 'CCTV Purchase' },
        { path: '/quotation-list', label: 'CCTV Quotation' },
       ]}
       />
       <SidebarMenu
       title="Laptop"
       submenu={[
        { path: '/sales-list', label: 'Laptop Sale' },
        { path: '/purchase-list', label: 'Laptop Purchase' },
        { path: '/quotation-list', label: 'Laptop Quotation' },
       ]}
       />
       <SidebarMenu
       title="Accessories"
       submenu={[
        { path: '/sales-list', label: 'Accessories Sale' },
        { path: '/purchase-list', label: 'Accessories Purchase' },
        { path: '/quotation-list', label: 'Accessories Quotation' },
       ]}
       />

       <SidebarMenu path="/product-list" label="Stock"/>
      
      
      </ul>

      
    </div>
  );
}

export default Sidebar;
