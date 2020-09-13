import React from "react";
import {
    BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import Nav from './components/Nav'
import List from './components/List'
import Create from './components/Create'

export default function Routes() {
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path="/Create" component={Create} />
                <Route path="/List" component={List} />
                <Route path="/" component={Nav} />
            </Switch>
        </Router>
    )
}

