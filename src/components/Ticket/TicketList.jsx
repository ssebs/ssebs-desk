import React from "react";

const TicketList = ({ list }) => {
    return (
        <div className="ticket-list">
            {list.map(tkt => {
                let shortBody = "" + tkt.body;
                shortBody = shortBody.substr(0, 64) + "...";
                return (
                    <a key={tkt.id} href="/#">
                        <div className="d-flex justify-content-between">
                            <div>
                                <strong>{tkt.subject}</strong>
                            </div>
                            <div className="text-muted">{tkt.requestor}</div>
                        </div>
                        {shortBody}
                    </a>
                );
            })}
        </div>
    );
};

export default TicketList;
