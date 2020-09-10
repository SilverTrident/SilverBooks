import React from 'react'

import './styles.css'

function TextArea(props) {
    return (
        <div id='registerBook-area'>
            <label>{props.label}</label>
            <textarea rows={props.rows}></textarea>
        </div>
    );

}

export default TextArea;