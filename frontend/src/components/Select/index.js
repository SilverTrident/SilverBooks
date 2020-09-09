import React from 'react'
import './style.css'



function Select(props) {
    return (
        <div id='select'>
            <select>
                <option id ='genero'selected disabled>Genero do Livro</option>
                {props.children}
            </select>
        </div>
    )
}

export default Select;