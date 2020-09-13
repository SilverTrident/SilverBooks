import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePageUser from '../pages/HomePageUser'
import DownloadPage from '../pages/DownloadPage'
import Login from '../pages/Login'

import '../assets/styles/global.css';
/*
import HomePageAdm from './pages/HomePageAdm'
import HomePageUser from './pages/HomePageUser'

import Register from './pages/RegisterUser'
import RegisterBook from './pages/RegisterBook'
import EditBook from './pages/EditBook'

*/


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePageUser} />
                <Route path='/selectedbook/:id'exact component={DownloadPage}/>
                <Route path='/user/login'exact component={Login}/>

            </Switch>
        </BrowserRouter>
    )

}

export default Routes;