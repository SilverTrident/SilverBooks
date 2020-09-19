import React from 'react'
import inconSearch from '../../assets/images/icons/Search.png'

import './styles.css'
function SerachBar(props) {
    return (
        <div id='field-find'>
            <input type='search' id='input' placeholder='Pesquisar um Livro' onChange= {props.clicke}/>
            <button id='button' onClick={props.action}><img src={inconSearch} alt='incon-search'/></button>
        </div>
    )
}

export default SerachBar;