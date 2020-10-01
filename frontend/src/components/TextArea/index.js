import React from 'react'

import './styles.css'

function TextArea(props) {
    return (
        <div id='registerBook-area'>
            <label>{props.label}</label>
              <textarea rows={50}  value={props.valo} onChange={props.action}>     </textarea>
        </div>
    );

}

export default TextArea;