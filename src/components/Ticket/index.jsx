import React, { useState, useEffect } from "react";

import Comment from "./Comment";

const Ticket = props => {
    const [ticket, setTicket] = useState(null);
    const [statuses, setStatuses] = useState(null);
    const [users, setUsers] = useState(null);
    const [adminUsers, setAdminUsers] = useState(null);

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
        // Get admin users
        fetch(`http://localhost:3005/users?role=1`)
            .then(resp => resp.json())
            .then(resp => {
                setAdminUsers(resp);
            });
    }, []);

    return (
        <div className="ticket-layout">
            {ticket && statuses && users && adminUsers ? (
                <>
                    <div className="ticket-meta">
                        <h5>Ticket #{ticket.id}</h5>
                        <hr />
                        <div className="form-group">
                            <label htmlFor="status">Status:</label>
                            <select
                                name="status"
                                defaultValue={ticket.status}
                                className="form-control"
                            >
                                {statuses.map(status => (
                                    <option key={status.id} value={status.id}>
                                        {status.status}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="owner">Owner:</label>
                            <select
                                name="owner"
                                defaultValue={ticket.owner}
                                className="form-control"
                            >
                                {adminUsers.map(user => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="requestor">Requestor:</label>
                            <select
                                name="requestor"
                                defaultValue={ticket.requestor}
                                className="form-control"
                            >
                                {users.map(user => (
                                    <option key={user.id} value={user.id}>
                                        {user.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <section className="ticket-center">
                        <div className="ticket-header">
                            <div className="d-flex justify-content-between">
                                <h4>{ticket.subject}</h4>
                                <p className="text-muted">
                                    {users.map(user => {
                                        if (user.id === ticket.requestor) {
                                            return user.name;
                                        }
                                    })}
                                </p>
                            </div>
                            <p>{ticket.body}</p>
                        </div>
                        {ticket.comments &&
                            ticket.comments.map(comment => (
                                <div
                                    className="ticket-comments"
                                    key={comment.id}
                                >
                                    <Comment
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
