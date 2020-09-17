import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import logo from '../../assets/images/icons/Logo.png'
//passar endereço dinamicamnete
function Header() {
    return (
        <header id="page-header" >
            <div id='header-container'>
            <Link to= {`/user/home`}>
                <img src={logo} alt="Logo SilverBooks"></img>
                </Link>
            </div>
        </header>
    )

}
export default Header;