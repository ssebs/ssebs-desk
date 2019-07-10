import React from "react";
import {Link} from "react-router-dom"

const NavSeperator = () => (
    <div className="nav-item py-1 text-muted" style={{ lineHeight: "1rem" }}>
        |
    </div>
);

const Header = () => {
    return (
        <div className="sticky-top">
            <nav
                className="navbar navbar-expand-sm navbar-light bg-light py-0"
                style={{ fontSize: "0.8rem" }}
            >
                <div className="container px-0" style={{ maxWidth: "1280px" }}>
                    <div className="navbar-nav mr-auto">
                        <Link className="nav-item nav-link py-1" to="/">
                            All Tickets
                        </Link>
                        <NavSeperator />
                        <Link className="nav-item nav-link py-1" to="/">
                            My Tickets
                        </Link>
                        <NavSeperator />
                        <Link className="nav-item nav-link py-1" to="/">
                            Unowned Tickets
                        </Link>
                        <NavSeperator />
                        <Link className="nav-item nav-link py-1" to="/users">
                            User Management
                        </Link>
                        <NavSeperator />
                        <Link className="nav-item nav-link py-1" to="/reports">
                            Reporting
                        </Link>
                    </div>
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link py-1" to="/users/me">
                            Profile
                        </Link>
                        <NavSeperator />
                        <Link className="nav-item nav-link py-1" to="/users/logout">
                            Logout
                        </Link>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-sm navbar-light bg-primary justify-content-between">
            <div className="container px-0 ml-auto" style={{ maxWidth: "1280px" }}>
                    <Link className="nav-item nav-link navbar-brand" to="/">ssebsDesk</Link>
                    <div className="navbar-nav">
                        <form className="form-inline">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                style={{ width: "175px" }}
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-light my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
