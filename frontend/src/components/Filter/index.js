import React from 'react'
import './styles.css'



function Filter(props) {
    return (
        <div id='btn-filter' actived={props.actived}>
                    <label >{props.name}</label>
        </div>
    )
}
export default Filter;