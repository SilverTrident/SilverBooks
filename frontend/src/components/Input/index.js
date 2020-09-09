import React from 'react'
import './style.css'



function Input(props) {
    return (
        <div id='input'>
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    )
}
export default Input;