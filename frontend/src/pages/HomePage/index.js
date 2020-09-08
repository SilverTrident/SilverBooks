import React from 'react'
import Header from '../../components/Header';
import Book from '../../components/Book'
import './styles.css'


function HomePage() {
    return (
        <div id="home-page" className='contanner'>
            <Header />
            <div id="home-page-content" className="container">
                <main>
                   <Book/> 
                   <Book/> 
                   <Book/> 
                   <Book/> 
                   <Book/> 
                   <Book/> 
                </main>
            </div>
        </div>

    );
}

export default HomePage;