import React, { useState, useEffect } from "react";

const Ticket = props => {
    const [ticket, setTicket] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3005/tickets/${props.match.params.id}`)
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp);
            });
    }, []);

    return (
        <div>
            <h1>Ticket #{props.match.params.id}</h1>
        </div>
    );
};

export default Ticket;
