// global
import React, { FC } from 'react';
import { Route, Redirect } from 'react-router';

interface PrivateRouteProps {
    component: FC
    auth: any
}

const PrivateRoute: FC<PrivateRouteProps> = function(props) {
        const { component: RouteComponent, auth } = props;
        return (
            <Route
                render={() => {
                    // the render method is called each time the page re-render.
                    if (auth) {
                        return <RouteComponent />;
                    } else {
                        return (
                            <Redirect
                                to={{
                                    pathname: '/login',
                                }}
                            />
                        );
                    }
                }}
            />
        );
}

export default PrivateRoute;