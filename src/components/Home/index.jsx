import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import FilterBox from "./FilterBox";
import Sidebar from "./Sidebar";
import TicketList from "../Ticket/TicketList";

const Home = props => {
    const [myTickets, setMyTickets] = useState(null);
    const [allTickets, setAllTickets] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3005/tickets`)
            .then(resp => resp.json())
            .then(resp => {
                setAllTickets(resp);
                setMyTickets(resp.slice(0, 2));
            });
    }, []);

    return (
        <div className="home-layout">
            <Sidebar />
            {myTickets && allTickets ? (
                <section className="home-layout-center">
                    <TicketList
                        title="My Tickets"
                        list={myTickets}
                        history={props.history}
                    />
                    <TicketList
                        title="All Tickets"
                        list={allTickets}
                        history={props.history}
                    />
                </section>
            ) : (
                <div>Loading...</div>
            )}
            <FilterBox />
        </div>
    );
};

export default withRouter(Home);
