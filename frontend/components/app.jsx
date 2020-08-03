import React from "react";
import SplashContainer from "./splash"
import NotFoundContainer from "./404"
import SpotSearchContainer from "./spots/spot_search_container";
import SpotShowContainer from "./spots/spot_show_container"


import {
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

export default () => (
    <div>
        
        <Switch>
            <Route exact path="/" component={SplashContainer}/>
            <Route exact path="/spots" component={SpotSearchContainer} />
            <Route path="/spots/:spotId" component={SpotShowContainer} />
            <Route component={NotFoundContainer} />
        </Switch>
    </div>
);
