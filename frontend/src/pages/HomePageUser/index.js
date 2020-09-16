import React, { useState, useEffect } from 'react'
import api from '../../services/api';
import {Link} from 'react-router-dom'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Book from '../../components/Book';
import Filter from '../../components/Filter';

import './styles.css';

import BtnDownload from '../../assets/images/icons/BtnDownload.png'




function HomePageUser() {

    const [books, setBooks] = useState([]);

    async function loadBooks() {
        await api.get(`/`).then(response => {
            setBooks(response.data);
        })
    }

    useEffect(() => {
        loadBooks();
    }, []);


    return (
        <div id='home-page-user'>
            <Header />
            <div id='filters'>
                <Filter name='ficção cientifica' />
                <Filter name='Romance' />
                <Filter name='Terror' />
                <Filter name='Aventura' />
                <Filter name='Distopia' />
                <Filter name='Games' />
                <Filter name='Programação' />
                <Filter name='Jovem adulto' />
                <Filter name='Crônicas' />
            </div>
            <div id="home-page-content" className="container">
                <aside id='aside-left'>

                </aside>
                <main>  
                    <div id='content-main'>
                    {
                        books.map(book => ( 
                            <Book titleBook = {book.name} linkImg={book.imgLink} subDescription={book.description}>
                              <Link to= {`/selectedbook/${book._id}`}>
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