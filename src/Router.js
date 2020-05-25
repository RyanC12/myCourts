import React from 'react'
import { Switch, Route, } from "react-router-dom";

import MyCourts from '../src/pages/MyCourts';
import AddCourt from '../src/components/AddCourt';
import Courts from '../src/components/Courts'

const Router = () => {

    return (
        <Switch>
            <Route component={AddCourt} path="/add" />
            <Route component={Courts} path="/find" />
            <Route component={MyCourts} exact path="/" />
        </Switch>
    )
}


export default Router;