import React, { useState, useEffect } from "react";

import Comment from "./Comment";

const Ticket = props => {
    const [ticket, setTicket] = useState(null);
    const [statuses, setStatuses] = useState(null);
    const [users, setUsers] = useState(null)

    useEffect(() => {
        // Get ticket info
        fetch(`http://localhost:3005/tickets/${props.match.params.id}`)
            .then(resp => resp.json())
            .then(resp => {
                setTicket(resp);
            });
        // Get statuses
        fetch(`http://localhost:3005/statuses`)
            .then(resp => resp.json())
            .then(resp => {
                setStatuses(resp);
            });
        // Get users
        fetch(`http://localhost:3005/users`)
            .then(resp => resp.json())
            .then(resp => {
                setUsers(resp);
            });
    }, []);

    return (
        <div className="ticket-layout">
            {ticket && statuses && users ? (
                <>
                    <div className="ticket-meta">
                        <h5>Ticket #{props.match.params.id}</h5>
                        <p>
                            Status:{" "}
                            <select name="status">
                                {statuses.map(status => (
                                    <option
                                        value={status.id}
                                        selected={status.id === ticket.status}
                                    >
                                        {status.status}
                                    </option>
                                ))}
                            </select>
                        </p>
                        <p>
                            Requestor:{" "}
                            <select name="requestor">
                                {users.map(user => (
                                    <option
                                        value={user.id}
                                        selected={user.id === ticket.requestor}
                                    >
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                        </p>
                    </div>
                    <section className="ticket-center">
                        <div className="ticket-header">
                            <h4>{ticket.subject}</h4>
                            <p>{ticket.body}</p>
                        </div>
                        {ticket.comments &&
                            ticket.comments.map(comment => (
                                <div className="ticket-comments">
                                    <Comment
                                        key={comment.id}
                                        text={comment.text}
                                        author={comment.author}
                                    />
                                </div>
                            ))}
                    </section>
                    <div className="ticket-actions">
                        <h5>Actions</h5>
                        <ul>
                            <li>Reply</li>
                            <li>Comment</li>
                            <li>Resolve</li>
                        </ul>
                    </div>
                </>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default Ticket;
