import React from "react";

const Sidebar = () => {
    return (
        <div className="home-layout-left">
            <nav class="nav flex-column">
                <a href="/#" className="nav-link">My Tickets</a>
                <a href="/#" className="nav-link">All Tickets</a>
                <a href="/#" className="nav-link">Unowned Tickets</a>
            </nav>
        </div>
    );
};

export default Sidebar;
