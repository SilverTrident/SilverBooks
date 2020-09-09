import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Book from '../../components/Book'
import './styles.css'

import BtnEdit from '../../assets/images/icons/BtnEdit.png'
import BtnDelete from '../../assets/images/icons/BtnDelete.png'
import BtnDownload from '../../assets/images/icons/BtnDownload.png'

function HomePage() {
    return (
        <div id="home-page" className='contanner'>
            <Header />
            <div id="home-page-content" className="container">
                <main>
                    <Book >
                        <img src={BtnEdit} />
                        <img src={BtnDelete} />
                    </Book>
                    <Book >
                        <img src={BtnDownload} />
                    </Book>
                    <Book >
                        <img src={BtnDownload} />
                    </Book>
                    <Book >
                        <img src={BtnEdit} />
                        <img src={BtnDelete} />
                    </Book>
                    <Book >
                        <img src={BtnEdit} />
                        <img src={BtnDelete} />
                    </Book>
                    <Book >
                        <img src={BtnEdit} />
                        <img src={BtnDelete} />
                    </Book>
                    <Book >
                        
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