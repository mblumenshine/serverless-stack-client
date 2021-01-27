import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Settings from "./containers/Settings";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import NotFound from "./containers/NotFound";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

// exact on Route component ensures that only / route will go to home,
// otherwise without exact, anything starting with / would also go to home
export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <UnauthenticatedRoute exact path="/login">
                <Login />
            </UnauthenticatedRoute>
            <UnauthenticatedRoute exact path="/signup">
                <Signup />
            </UnauthenticatedRoute>
            <AuthenticatedRoute exact path="/settings">
                <Settings />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/notes/new">
                <NewNote />
            </AuthenticatedRoute>
            <AuthenticatedRoute exact path="/notes/:id">
                <Notes />
            </AuthenticatedRoute>
            {/* Finally, catch all unmatched routes */}
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}