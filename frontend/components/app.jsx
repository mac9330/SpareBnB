import React from "react";
import Header from "./header"
import NotFoundContainer from "./404"
import SpotSearchContainer from "./spots/spot_search_container";
import SpotShowContainer from "./spots/spot_show_container"
import SpotCreateFormContainer from "./spots/spot_create_form_container"
import Home from "./home"
import Footer from "./footer"




import {
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

export default () => (
    <div>

        <Header/>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/spots" component={SpotSearchContainer} />
            <ProtectedRoute exact path="/spots/new" component={SpotCreateFormContainer} />
            <Route path="/spots/:spotId" component={SpotShowContainer} />
            <Route component={NotFoundContainer} />
        </Switch>
            <Footer />
    </div>
);
