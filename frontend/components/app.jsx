import React from "react";
import Splash from "./splash"
import NotFound from "./404"


import {
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

export default () => (
    <div>
        
        <Switch>
            <Route exact path="/" component={Splash}/>
            <Route component={NotFound} />
        </Switch>
    </div>
);
