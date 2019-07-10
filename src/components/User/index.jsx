import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        // Get users
        fetch(`http://localhost:3005/users`)
            .then(resp => resp.json())
            .then(resp => {
                setUsers(resp);
            });
    }, []);

    return (
        <div>
            <h1>List of all users:</h1>
            {users &&
                users.map(user => {
                    const usrLink = `/user/${user.id}`;
                    return (
                        <Link to={usrLink} key={user.id} className="d-block">
                            {user.name}
                        </Link>
                    );
                })}
        </div>
    );
};

export default Users;
