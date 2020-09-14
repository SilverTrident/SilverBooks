import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePageUser from '../pages/HomePageUser'
import DownloadPage from '../pages/DownloadPage'
import Login from '../pages/Login'
import ListAdmin from '../pages/HomePageAdm'
import '../assets/styles/global.css';

//import PrivateRoute from './PrivateRoutes';
/*

import HomePageUser from './pages/HomePageUser'

import Register from './pages/RegisterUser'
import RegisterBook from './pages/RegisterBook'
import EditBook from './pages/EditBook'

*/
import { isAthe } from '../services/isAuth'
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route 
    {...rest} 
    render={props => 
        isAthe() ? (
            <Component {...props} {...rest} />
        ) : (
              <Redirect to={{ pathname: '/user/login', state: { from: props.location } }} />
            )
    } 
    />
)


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRoute path="/" exact component={HomePageUser} />
                <Route path='/selectedbook/:id' exact component={DownloadPage} />
                <Route path='/user/login' exact component={Login} />
                <PrivateRoute path='/user/' exact component={ListAdmin} />

            </Switch>
        </BrowserRouter>
    )

}

export default Routes;