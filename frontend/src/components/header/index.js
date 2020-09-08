import React from 'react'
import './style.css'
import logo from '../../assets/images/icons/Logo.png'
function Header() {
    return (
        <header className="page-header" >
            <div id='header-container'>
                <img src={logo} alt="Logo SilverBooks"></img>
            </div>
        </header>
    )

}
export default Header;