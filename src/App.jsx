import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Route exact path="/" component={Home} />
            </BrowserRouter>
        </>
    );
};

export default App;
