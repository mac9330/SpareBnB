import React from "react";
import Splash from "./splash"
import NotFound from "./404"
import SpotSearch from "./spots/spot_search_container";


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
            <Route exact path="/spots/" component={SpotSearch} />
            <Route component={NotFound} />
        </Switch>
    </div>
);
