import React, { useState, useEffect } from 'react'

import api from '../../services/api';
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Book from '../../components/Book';
import Filter from '../../components/Filter';
import SearchBar from '../../components/SearchBar';

import NotFoundBook from '../../assets/images/notFoundBook.png';
import BtnDownload from '../../assets/images/icons/BtnDownload.png';

import './styles.css';

function HomePageUser(props) {

    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState('');
    const [query, setQuery] = useState('');
    const [labelFilterBooks] = useState('TODOS OS LIVROS');


    async function loadBooks() {
        let url
        if (query) {
            url = `/results?search_query=${query}`
        } else {
            url = `/${filter}`
        }
        await api.get(url).then(response => {
            setBooks(response.data);
        })
    }

    useEffect(() => {
        loadBooks();
    }, [filter, query, props]);

    function initialSatus() {
        setFilter('')
        setQuery('')
    }
    
    return (
        <div id='home-page-user'>

            <Header link='/'>
                <div id='field-find'>
                    <SearchBar clicke={e => setQuery(e.target.value)} />
                </div>

            </Header>

            <div id='filters'>
                <button type='button' onClick={initialSatus}>
                    <Filter name='Todos' />
                </button>
                <button type='button' onClick={() => setFilter('ROMANCE')}>
                    <Filter name='Romance' />
                </button>
                <button type='button' onClick={() => setFilter('TERROR')}>
                    <Filter name='Terror' />
                </button>
                <button type='button' onClick={() => setFilter('AVENTURA')}>
                    <Filter name='Aventura' />
                </button>
                <button type='button' onClick={() => setFilter('DISTOPIA')}>
                    <Filter name='Distopia' />
                </button>
                <button type='button' onClick={() => setFilter('GAMES')}>
                    <Filter name='Games' />
                </button>
                <button type='button' onClick={() => setFilter('INFORMATICA')}>
                    <Filter name='Programação' />
                </button>
                <button type='button' onClick={() => setFilter('JOVEM ADULTO')}>
                    <Filter name='Jovem adulto' />
                </button>
                <button type='button' onClick={() => setFilter('CRONICAS')}>
                    <Filter name='Crônicas' />
                </button>
            </div>

            <div id="home-page-content" >
                <div id='adsense1'>
                    ads
               </div>

                <div id='main'>
                    <div id='home-page-label-books'>
                        {
                            !filter?<h2 >{labelFilterBooks}</h2>
                            :
                            <h2 >{filter}</h2>
                        }
                        
                    </div>
                    <main>
                        <div id='content-main'>

                            {
                                books.length ?
                                    books.map(book => (
                                        <Book key = { book._id}titleBook={book.title + " - " + book.author} linkImg={book.imgLink} subDescription={book.subDescription}>
                                            <Link to={`/download-page/${book._id}`}>
                                                <img src={BtnDownload} alt='button-download' />
                                            </Link>
                                        </Book>
                                    )) : (<div>
                                        <img id='not-found-books-img' src={NotFoundBook} alt='not-found-books' />
                                    </div>)
                            }
                        </div>
                    </main>

                </div>
                <div id='adsense2'>
                    ads2
               </div >

            </div>
            <div id='footer-main-page'>
                <Footer />
            </div>

        </div>
    );
}
export default HomePageUser;