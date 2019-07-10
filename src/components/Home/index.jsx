import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import FilterBox from "./FilterBox";
import Sidebar from "./Sidebar";
import TicketList from "../Ticket/TicketList";

let sampleAllTickets = [];
let sampleMyTickets = [];
for (let i = 0; i < 12; i++) {
    const tmpTik = {
        id: i,
        subject: `Pls help me num${i}`,
        body:
            "Help pls Exercitation ea quis ipsum velit reprehenderit quis incididunt exercitation aliqua ipsum ex voluptate officia occaecat.",
        requestor: "Test User",
        owner: 1,
        status: "open",
        comments: []
    };
    if (i < 6) {
        sampleMyTickets.push(tmpTik);
    }
    sampleAllTickets.push(tmpTik);
}

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
