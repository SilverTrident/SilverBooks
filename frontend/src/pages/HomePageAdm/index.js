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
    const [filterBooks, setFilterBooks] = useState([]);
    const [find, setFind] = useState([]);
    const [filter, setFilter] = useState('');


    async function Books() {
        await api.get(`/admin/listall/${filter}`).then(response => {
            setBooks(response.data);
            setFilterBooks(response.data);
        })
    }

    useEffect(() => {
        Books();
    }, [filter]);



    function click() {

        //array.push(books[x].name.toUpperCase()); 


        const result = books.filter(r => r.name.includes(find))
        setFilterBooks(result)
        console.log(filterBooks)
    }


    return (
        <div id="home-page" className='contanner'>
            <Header link='/user' label='/user/registerbook'>
            <SearchBar action ={click}clicke = {e => setFind(e.target.value)}/>
                <ButtonLogout />

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
            <div id="home-page-content" >
                <main>
                    {
                        filterBooks.map(book => (
                            <Book titleBook={book.name} linkImg={book.imgLink} subDescription={book.description}>
                                <Link to={`/user/edit/${book._id}`}>
                                    <img src={BtnEdit} alt='button edit' />
                                </Link>
                            </Book>
                        ))
                    }



                </main>
            </div>
            <div id='back-page'>

            </div>
            <Footer />
        </div>
    );
}

export default HomePageAdm;