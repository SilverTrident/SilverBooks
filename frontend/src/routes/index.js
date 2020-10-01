import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoutes';

import HomePageUser from '../pages/HomePageUser';
import DownloadPage from '../pages/DownloadPage';

import Login from '../pages/Login';

import HomePageAdm from '../pages/HomePageAdm';
import EditBook from '../pages/EditBook';
import RegisterBook from '../pages/RegisterBook'

import Register from '../pages/RegisterUser';

import NotFoundPage from '../pages/NotFoundPage'

import '../assets/styles/global.css';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
            < Route path="/" exact component={HomePageUser} />
            
            < Route path="/:filter" exact component={HomePageUser} />
            < Route path="/" exact component={HomePageUser} />
           
            
            <Route path='/download-page/:id' exact component={DownloadPage} />
            <Route path='/user/login' exact component={Login} />
            

                <PrivateRoute path='/user/home' exact component={HomePageAdm} />
                <PrivateRoute path='/user/home/:filter' exact component={HomePageAdm} />
                <PrivateRoute path='/user/edit/:id' exact component={EditBook} />
                <PrivateRoute path='/user/registerbook' exact component={RegisterBook} />

                <PrivateRoute path='/register/user/auth' exact component={Register} />

                <Route path='*' component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    )

}

export default Routes;