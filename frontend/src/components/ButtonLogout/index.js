import React from 'react'

import {Link } from 'react-router-dom';
import log from '../../utils/logout';

import './styles.css'
function buttonLogout(){
    return(
        <div id='area-logout'>
            <Link to='/user/login'><button onClick={log}>SAIR</button></Link>
        </div>
    )

}

export default buttonLogout;




