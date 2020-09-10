import React from 'react'

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Book from '../../components/Book'
import './styles.css'

import BtnDownload from '../../assets/images/icons/BtnDownload.png'
function HomePageUser() {
    return (
        <div id='home-page-user'>
            <Header />
            <div id="home-page-content" className="container">
                <aside id='aside-left'>

                </aside>
                <main>
                    <Book >
                        <img src={BtnDownload} alt='button Download' />
                        
                    </Book>
                    <Book >
                        <img src={BtnDownload} alt='button Download' />
                        
                    </Book>
                    <Book >
                        <img src={BtnDownload} alt='button Download' />
                        
                    </Book>
                    <Book >
                        <img src={BtnDownload} alt='button Download' />
                        
                    </Book>
                </main>
                <aside id='aside-right'>

                </aside>
            </div>
            
            <Footer />
            
            
        </div>
    );
}

export default HomePageUser;