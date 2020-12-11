import React from "react";
import { Route, Link } from "react-router-dom";

const Router = () => {
    return (
        <>
            <Route exact path="/">
                <Link to="/about">hello world</Link>
            </Route>
            <Route path="/about">
                about
            </Route>
        </>
    );
}

export default Router;