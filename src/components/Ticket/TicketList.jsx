import React from "react";

const TicketList = ({ list, title}) => {
    return (
        <div className="ticket-list">
            <h3>{title}</h3>
            {list.map(tkt => {
                let shortBody = "" + tkt.body;
                shortBody = shortBody.substr(0, 64) + "...";
                return (
                    <button key={tkt.id} className="">
                        <div className="d-flex justify-content-between">
                            <div className="font-weight-kindabold">
                                {tkt.subject}
                            </div>
                            <div className="text-muted">{tkt.requestor}</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="">{shortBody}</div>
                            <div>Status: {tkt.status}</div>
                        </div>
                    </button>
                );
            })}
        </div>
    );
};

export default TicketList;
