import React from "react";

const NavSeperator = () => (
    <div className="nav-item py-1 text-muted" style={{ lineHeight: "1rem" }}>
        |
    </div>
);

const Header = () => {
    return (
        <>
            <nav
                className="navbar navbar-expand-sm navbar-light bg-light py-0"
                style={{ fontSize: "0.8rem" }}
            >
                <div className="container pl-0 ml-auto">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link  py-1" href="/#">
                            All Tickets
                        </a>
                        <NavSeperator />
                        <a className="nav-item nav-link  py-1" href="/#">
                            My Tickets
                        </a>
                        <NavSeperator />
                        <a className="nav-item nav-link  py-1" href="/#">
                            Unowned Tickets
                        </a>
                        <NavSeperator />
                        <a className="nav-item nav-link  py-1" href="/#">
                            User Management
                        </a>
                        <NavSeperator />
                        <a className="nav-item nav-link  py-1" href="/#">
                            Reporting
                        </a>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-sm navbar-light bg-primary justify-content-between">
                <div className="container pl-0 ml-auto">
                    <a className="nav-item nav-link navbar-brand">ssebsDesk</a>
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
        </>
    );
};

export default Header;
