import React from "react";

const Header = () => {
    return (
        <>
            <nav
                className="navbar navbar-expand-sm navbar-light bg-light py-0"
                style={{ fontSize: "0.8rem" }}
            >
                <div className="navbar-nav">
                    <a className="nav-item nav-link py-1" href="/#">
                        All Tickets
                    </a>
                    <a className="nav-item nav-link  py-1" href="/#">
                        My Tickets
                    </a>
                    <a className="nav-item nav-link  py-1" href="/#">
                        Unowned Tickets
                    </a>
                    <a className="nav-item nav-link  py-1" href="/#">
                        User Management
                    </a>
                    <a className="nav-item nav-link  py-1" href="/#">
                        Reporting
                    </a>
                </div>
            </nav>
            <nav className="navbar navbar-expand-sm navbar-light bg-primary justify-content-between">
                <a className="nav-item nav-link navbar-brand">ssebsDesk</a>
                <div className="navbar-nav">
                    <form className="form-inline">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            style={{width:"175px"}}
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
            </nav>
        </>
    );
};

export default Header;
