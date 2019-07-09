import React from "react";

import FilterBox from "./FilterBox";
import Sidebar from "./Sidebar";
import TicketList from "../Ticket/TicketList";

let sampleMyTickets = [];
for (let i = 0; i < 12; i++) {
    sampleMyTickets.push({
        id: i,
        subject: `Pls help me num${i}`,
        "body": "Help pls Exercitation ea quis ipsum velit reprehenderit quis incididunt exercitation aliqua ipsum ex voluptate officia occaecat.",
        requestor: 2,
        owner: 1,
        status: 2,
        comments: []
    });
}

const Home = () => {
    return (
        <div className="home-layout">
                <Sidebar />
                <div className="home-layout-center">
                    <TicketList list={sampleMyTickets} />
                </div>
                <FilterBox />
        </div>
    );
};

export default Home;
