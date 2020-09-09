import React from 'react'
import BtnDownload from '../../assets/images/icons/BtnDownload.png'




import './styles.css'
function Book(props) {
    return (
        <article className="book-item">
            <header >
                <strong id='book-title'>A Cantiga dos Pássaros e das Serpentes  - Jogos Vorazes Vol 04 – Suzanne Collins</strong>
            </header>
            <div id="book-content">
                <img id='book-img' src="http://imagens.lelivros.love/2020/06/baixar-livro-a-cantiga-dos-passaros-e-das-serpentes-jogos-vorazes-vol-04-suzanne-collins-em-pdf-epub-mobi-ou-ler-online-370x546.jpg"
                    alt="Book image"
                />
                <p>
                    UMA HISTÓRIA DA SÉRIE JOGOS VORAZES. AMBIÇÃO O ALIMENTARÁ. COMPETIÇÃO O CONDUZIRÁ.
                    MAS O PODER TEM O SEU PREÇO.
                    
                </p>
                <div id='btns'>
                    
                     {props.children}
                </div>
                
            </div>

        </article>
    )
}

export default Book;