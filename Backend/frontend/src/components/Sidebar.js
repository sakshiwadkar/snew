import React, { useState } from 'react';
import './Sidebar.css'; // Import the Sidebar CSS file
import SidebarItem from './SidebarItem'; // Import SidebarItem component
import items from '../data/sidebar.json'; // Import the JSON data for sidebar items

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
                {items.map((item, index) => (
                    <SidebarItem key={index} item={item} />
                ))}
            </div>
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                <i className="bi-chevron-left"></i>
            </button>
        </>
    );
}

export default Sidebar;
