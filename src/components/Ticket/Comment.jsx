import React from "react";

const Comment = ({ text, author }) => {
    return (
        <div>
            {author} said: {text}
        </div>
    );
};

export default Comment;
