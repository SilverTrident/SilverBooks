import React,{ useState, useEffect } from 'react'
import {Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Book from '../../components/Book';
import Filter from '../../components/Filter';


import api from '../../services/api'
import './styles.css'

import BtnEdit from '../../assets/images/icons/BtnEdit.png'
import ButtonLogout from '../../components/ButtonLogout';



function HomePageAdm() {

    const [books, setBooks] = useState([]);
    const [idBook, setIdBook] = useState();
    async function Books() {
        await api.get(`/admin/listall/`).then(response => {
            setBooks(response.data);
        })
    }

    useEffect(() => {
        Books();
    }, []);


    
    return (
        <div id="home-page" className='contanner'>
            <Header link='/user'>
             <ButtonLogout/>
            </Header>
            <div id='filters'>
            <Filter name='ficção cientifica'/>
                <Filter name='Romance'/>
                <Filter name='Terror'/>
                <Filter name='Aventura'/>
                <Filter name='Distopia'/>
                <Filter name='Games'/>
                <Filter name='Programação'/>
                <Filter name='Jovem adulto'/>
                <Filter name='Crônicas'/>
               
            </div>
            <div id="home-page-content" >
                <main>
                {
                        books.map(book => ( 
                            <Book titleBook = {book.name} linkImg={book.imgLink} subDescription={book.description}>
                              <Link to= {`/user/edit/${book._id}`}>
                              <img src={BtnEdit} alt='button edit'/>
                              </Link>                                             
                            </Book>
                        ))      
                    }
 
                  
                    
                </main>
            </div>
            <div id='back-page'>

            </div>
            <Footer/>
        </div>
    );
}

export default HomePageAdm;