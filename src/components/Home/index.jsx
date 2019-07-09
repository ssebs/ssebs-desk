import React from "react";

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

const Home = () => {
    return (
        <div className="home-layout">
            <Sidebar />
            <div className="home-layout-center">
                <TicketList title="My Tickets" list={sampleMyTickets} />
            </div>
            <FilterBox />
        </div>
    );
};

export default Home;
