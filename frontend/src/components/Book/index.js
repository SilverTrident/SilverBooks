import React from 'react'





import './styles.css'
function Book(props) {
    return (
        <article className="book-item" >
            <div id='container-title'>
                <strong id='book-title'>{props.titleBook}</strong>
            </div>
            <div id="book-content">
                <img id='book-img' src={props.linkImg} alt='book-folder'/>
                <p>
                    {props.subDescription}    
                </p>
                <div id='btns'>            
                     {props.children}
                </div>
                
            </div>

        </article>
    )
}

export default Book;