import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Filter from '../../components/Filter'


import './styles.css'

function DownloadPage({ match }) {
    const [book, setBook] = useState([]);

    async function loadBooks() {
        await api.get(`/selectedbook/${match.params.id}`).then(response => {
            setBook(response.data);
        })
    }

    useEffect(() => {
        loadBooks();
    }, []);


    return (






        <div id='pageDowload'>
            <Header link='/'>
                Todos os Livros
            </Header>
            

            <div id='containner-pageDowload'>
                <aside id='left-aside'>

                </aside>
                <section id='top-page'>

                    <header>
                        <div id='img-container'>
                            <img id='book-img' alt='book-folder' src={book.imgLink} />
                        </div>
                        <div id='title-container'>
                            <h1>{book.name}</h1>

                            <aside id='advertising'>

                            </aside>
                        </div>
                    </header>
                    <footer>
                        <a href={book.bookLink} target="_blank">
                            <input type='button' id='btn-download' value='Download' />
                        </a>

                    </footer>
                    <div id='main-page'>
                        <main>
                            <label>Descrição do livro:</label>
                            <p>{book.description}</p>
                        </main>
                    </div>
                </section>

                <aside id='right-aside'>
                </aside>
            </div>
            <Footer />
        </div>
    );
}

export default DownloadPage;