import React ,{useState}from 'react'

import './styles.css'

function TextArea(props) {
    const [vazio, setVazio] =useState(props.valo);
    
    
    return (
        <div id='registerBook-area'>
            <label>{props.label}</label>
              <textarea rows={50}  value={vazio}   onChange={props.action}> </textarea>
        </div>
    );

}

export default TextArea;