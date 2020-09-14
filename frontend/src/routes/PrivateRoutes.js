import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const isLogged = !!localStorage.getItem('app-token');
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={ (props) =>
            isLogged ? (
                <Component {...props} {...rest} />
            ) : (
                    <Redirect to={{ pathname: '/user/login', state: { from: props.location } }} />
                )
        }
    />
)


export default PrivateRoute;