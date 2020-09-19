import React, { useState, useEffect } from 'react'
import api from '../../services/api';
import { Link } from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Book from '../../components/Book';
import Filter from '../../components/Filter';
import SerachBar from '../../components/SerachBar';
import BtnDownload from '../../assets/images/icons/BtnDownload.png';

import './styles.css';

function HomePageUser() {

    const [books, setBooks] = useState([]);
    const [filterBooks, setFilterBooks] = useState([]);
    const [filter, setFilter] = useState('');
    const [find, setFind] = useState([]);

    async function loadBooks() {
        await api.get(`/${filter}`).then(response => {
            setBooks(response.data);
            setFilterBooks(response.data)
        })
    }

    useEffect(() => {
        loadBooks();
    }, [filter]);


    function serach() {
          
             //  array.push(books[x].name.toUpperCase()); 

        const result = books.filter(r => r.name.includes(find))
        setFilterBooks(result)
        console.log(filterBooks)
    }

    return (
        <div id='home-page-user'>

            <Header link='/'>
                <div id='field-find'>
                    <SerachBar action={serach} clicke={e => setFind(e.target.value)} />
                </div>

            </Header>

            <div id='filters'>
                <button type='button' onClick={() => setFilter(''), () => setFilterBooks(books)}>
                    <Filter name='Todos' />
                </button>
                <button type='button' onClick={() => setFilter('1')}>
                    <Filter name='Romance' />
                </button>
                <button type='button' onClick={() => setFilter('2')}>
                    <Filter name='Terror' />
                </button>
                <button type='button' onClick={() => setFilter('3')}>
                    <Filter name='Aventura' />
                </button>
                <button type='button' onClick={() => setFilter('4')}>
                    <Filter name='Distopia' />
                </button>
                <button type='button' onClick={() => setFilter('5')}>
                    <Filter name='Games' />
                </button>
                <button type='button' onClick={() => setFilter('6')}>
                    <Filter name='Programação' />
                </button>
                <button type='button' onClick={() => setFilter('7')}>
                    <Filter name='Jovem adulto' />
                </button>
                <button type='button' onClick={() => setFilter('8')}>
                    <Filter name='Crônicas' />
                </button>
            </div>

            <div id="home-page-content" className="container">
                <aside id='aside-left'>
                </aside>
                <main>
                    <div id='content-main'>
                        {
                            filterBooks.map(book => (
                                <Book titleBook={book.name} linkImg={book.imgLink} subDescription={book.description}>
                                    <Link to={`/selectedbook/${book._id}`}>
                                        <img src={BtnDownload} alt='image-button-download' />
                                    </Link>
                                </Book>
                            ))
                        }

                    </div>
                </main>
                <aside id='aside-right'>
                </aside>
            </div>
            <Footer />
        </div>
    );
}

export default HomePageUser;