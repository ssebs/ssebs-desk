import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Ticket from "./components/Ticket";

const App = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route path="/ticket/:id" component={Ticket} />
            </BrowserRouter>
        </>
    );
};

export default App;
