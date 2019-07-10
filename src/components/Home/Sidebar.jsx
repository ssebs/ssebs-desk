import React from "react";
import { Link } from "react-router-dom";

const Sidebar = props => {
    return (
        <div className="home-layout-left">
            <nav className="nav flex-column">
                <Link to="/" className="nav-link">My Tickets</Link>
                <a href="/#" className="nav-link">All Tickets</a>
                <a href="/#" className="nav-link">Unowned Tickets</a>
            </nav>
        </div>
    );
};

export default Sidebar;
