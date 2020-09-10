import React from 'react'

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Book from '../../components/Book'
import Filter from '../../components/Filter'

import './styles.css'

import BtnEdit from '../../assets/images/icons/BtnEdit.png'
import BtnDelete from '../../assets/images/icons/BtnDelete.png'


function HomePage() {
    return (
        <div id="home-page" className='contanner'>
            <Header />
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
            <div id="home-page-content" className="container">
                <main>
                    <Book >
                        <img src={BtnEdit} alt='button edit'/>
                        <img src={BtnDelete} alt='button delete'/>
                    </Book>
                    <Book >
                        <img src={BtnEdit} alt='button edit'/>
                        <img src={BtnDelete} alt='button delete'/>
                    </Book>
                    <Book >
                        <img src={BtnEdit} alt='button edit'/>
                        <img src={BtnDelete} alt='button delete'/>
                    </Book>
                    <Book >
                        <img src={BtnEdit} alt='button edit'/>
                        <img src={BtnDelete} alt='button delete'/>
                    </Book>
                    <Book >
                        <img src={BtnEdit} alt='button edit'/>
                        <img src={BtnDelete} alt='button delete'/>
                    </Book>
                    
                    
                </main>
            </div>
            <div id='back-page'>

            </div>
            <Footer/>
        </div>
    );
}

export default HomePage;