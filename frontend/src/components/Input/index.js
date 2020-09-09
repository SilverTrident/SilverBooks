import React from 'react'
import './style.css'



function Input({ type, placeholder }) {
    return (
        <div id='input'>
            <input type={type} placeholder={placeholder} />
        </div>
    )
}
export default Input;