import React from 'react'
import './style.css'



function Select(props) {
    return (
        <div id='select'>
            <select value={props.value} onChange={props.action}>
                <option value = '0'id='genero' selected disabled>Genero do Livro</option>
                <option value='1'>Romance</option>
                <option value='2'>Terror</option>
                <option value='3'>Aventura</option>
                <option value='4'>Distopia</option>
                <option value='5'>Games</option> 
                <option value='6'>Programação</option>
                <option value='7'>Jovem adulto</option>
                <option value='8'>Crônicas</option>

            </select>
        </div>
    )
}

export default Select;