import React from 'react'
import './style.css'



function Input(props) {
    return (
        <div id='input'>
            <input defaultValue = {props.valo}type={props.type} placeholder={props.placeholder}  onChange={props.action}/>
        </div>
    )
}
export default Input;