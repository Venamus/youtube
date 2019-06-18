import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PublicRoute = (props) => {
    const { component: Component, path, authed, exact } = props;

    return (
        <Route
            exact={exact}
            path={path}
            render={() => !authed ? <Component {...props} /> : null}
        />
    );
};

export default PublicRoute;
