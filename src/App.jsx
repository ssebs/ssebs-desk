import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";

const App = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <Route exact path="/" render={() => <h1>Test</h1>} />
            </BrowserRouter>
        </>
    );
};

export default App;
