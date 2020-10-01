import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer'


import NotFoundBook from '../../assets/images/notFoundBook.png';

import './styles.css'

function DownloadPage({ match }) {
    const [book, setBook] = useState([]);

    

    useEffect(() => {
        const  loadBooks= async () => {
            await api.get(`/selectedbook/${match.params.id}`).then(response => {
                setBook(response.data);
            })
        }
        loadBooks();
    }, [match]);

    return (
        <div id='pageDowload'>
            <Header link='/'>

            </Header>

            <div id='all-books-link'>
                <Link to='/'>Todos os Livros</Link>
            </div>

            <div id='containner-pageDowload'>
                <aside id='left-aside'>

                </aside>
                <section id='top-page'>
                    {
                        book.title ? (
                            <div>
                                <header>
                                    <div id='img-container'>
                                        <img id='book-img' alt='book-folder' src={book.imgLink} />
                                    </div>
                                    <div id='title-container'>
                                        <h1>{book.title} - {book.author}</h1>

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
                            </div>
                        ) : (
                            <img id='not-found-books-img' src={NotFoundBook} alt='not-found-books' />
                            )
                    }
                </section>

                <aside id='right-aside'>
                </aside>
            </div>
            <Footer />
        </div>
    );
}

export default DownloadPage;