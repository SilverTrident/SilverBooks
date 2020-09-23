import React from 'react'
import inconSearch from '../../assets/images/icons/Search.png'

import './styles.css'
function SerachBar(props) {
    return (
        <div id='field-find'>
            <input type='search' id='input' placeholder='Pesquisar um Livro' onChange= {props.clicke}/>
            <div id= 'logo'>
                <img src={inconSearch} alt='incon-search'/>
            </div>
            
        </div>
    )
}

export default SerachBar;