import React from "react";
import Header from "./header"
import NotFoundContainer from "./404"
import SpotSearchContainer from "./spots/spot_search_container";
import SpotShowContainer from "./spots/spot_show_container"
import SpotCreateFormContainer from "./spots/spot_create_form_container"
import ReservationsContainer from "./reservations/reservations_index_container"
import Home from "./home"
import Footer from "./footer"
import ProtectedRoute from '../util/route_util';

import {
    Route,
    Switch,
} from 'react-router-dom';

export default () => (
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/spots" component={SpotSearchContainer} />
            <ProtectedRoute exact path="/spots/new" component={SpotCreateFormContainer} />
            <Route path="/spots/:spotId" component={SpotShowContainer} />
            <ProtectedRoute exact path="/reservations/" component={ReservationsContainer} />
            <Route component={NotFoundContainer} />
        </Switch>
        <Footer />
    </div>
);
