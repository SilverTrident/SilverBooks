import React from 'react'

import {Link } from 'react-router-dom';
import log from '../../utils/logout';

import iconExit from '../../assets/images/icons/Exit.png'

import './styles.css'
function buttonLogout(){
    return(
        <div id='area-logout'>
            <Link to='/user/login'><button onClick={log}>SAIR <img src={iconExit} alt='button-logout'/></button></Link>
        </div>
    )

}

export default buttonLogout;




