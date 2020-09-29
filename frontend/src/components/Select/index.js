import React from 'react'
import './style.css'



function Select(props) {
    return (
        <div id='select'>
            <select value={props.value} onChange={props.action}>
                <option value = '0'id='genero'  disabled>Genero do Livro</option>
                <option value='ROMANCE'>ROMANCE</option>
                <option value='TERROR'>TERROR</option>
                <option value='AVENTURA'>AVENTURA</option>
                <option value='DISTOPIA'>DISTOPIA</option>
                <option value='GAMES'>GAMES</option> 
                <option value='INFORMATICA'>INFORMATICA</option>
                <option value='JOVEM ADULTO'>JOVEM ADULTO</option>
                <option value='CRONICAS'>CRONICAS</option>

            </select>
        </div>
    )
}

export default Select;