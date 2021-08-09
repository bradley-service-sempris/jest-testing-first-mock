import React from 'react';
// import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    // Redirect,
    Route,
    Switch
} from 'react-router-dom';
import LandingPage from '../../pages/landingPage/LandingPage';

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => <LandingPage {...props} />}
                />
            </Switch>
        </Router>
    )
};

export default AppRouter;
