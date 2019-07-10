import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Ticket from "./components/Ticket";
import Users from "./components/User";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/ticket/:id" component={Ticket} />

            <Switch>
                <Route exact path="/users" component={Users} />
                <Route exact path="/users/:id" component={Users} />
                <Route exact path="/users/me" component={Users} />
                <Route exact path="/users/logout" component={Users} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
