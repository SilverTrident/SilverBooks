import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Book from '../../components/Book';
import Filter from '../../components/Filter';


import api from '../../services/api'
import './styles.css'

import BtnEdit from '../../assets/images/icons/BtnEdit.png'
import ButtonLogout from '../../components/ButtonLogout';
import SearchBar from '../../components/SearchBar';



function HomePageAdm() {

    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState('');
    const [query, setQuery] = useState('');
    const [labelFilterBooks] = useState('Todos os Livros');

    async function Books() {

        let url
        if (query) {
            url = `/admin/results?search_query=${query}`
        } else {
            url = `/admin/listall/${filter}`
        }

        await api.get(url).then(response => {
            setBooks(response.data);

        })
    }

    useEffect(() => {
        Books();
    }, [filter, query]);

    function initialSatus() {
        setFilter('')
        setQuery('')
    }


    return (
        <div id="home-page-admin" className='contanner'>
            <Header  link='/user/home'>

                <div id='header-buttons-rotes'>
                    <Link to='/'>Home Page</Link>
                    <Link to='/user/registerbook'>Novo Livro</Link>
                    <Link to='/register/user/auth'>Novo Usuario</Link>
                </div>
                <div id='header-find'>
                    <SearchBar clicke={e => setQuery(e.target.value)} />
                </div>
                <div id='header-button-logout'>
                    <ButtonLogout />
                </div>
            </Header>



            <div id='filters-admin'>
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

            <div id="home-page-content-admin" >
                {
                    !filter ? <h2 >{labelFilterBooks}</h2>
                        :
                        <h2 >{filter}</h2>
                }
                <main>
                    {
                        books.map(book => (
                            <Book key = {book._id}titleBook={book.title + " - " + book.author} linkImg={book.imgLink} subDescription={book.subDescription}>
                                <Link to={`/user/edit/${book._id}`}>
                                    <img src={BtnEdit} alt='button edit' />
                                </Link>
                            </Book>
                        ))
                    }
                </main>
            </div>
            <div id='back-page-admin'>
                <Footer />
            </div>

        </div>
    );
}

export default HomePageAdm;