import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = (props) => {
    const { component: Component, authed, path, exact } = props;

    return (
        <Route
            exact={exact}
            path={path}
            render={() => authed ? <Component {...props} /> :
            <Redirect to={{ pathname: '/' }} />}
        />
    );
};

export default PrivateRoute;
