import React from 'react'
import { Switch, Route } from "react-router-dom";

import MyCourts from '../src/pages/MyCourts';
import AddCourt from './components/AddCourt';

const Router = () => {

    return (
        <Switch>
            <Route exact path="/" component={MyCourts} />
            <Route path="/add" component={AddCourt} />
        </Switch>
    )
}


export default Router;