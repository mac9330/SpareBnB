import React from "react";
import Splash from "./splash"
import NotFound from "./404"
import SpotIndex from "./spots/spot_index_container";


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
            <Route exact path="/spots/" component={SpotIndex} />
            <Route component={NotFound} />
        </Switch>
    </div>
);
