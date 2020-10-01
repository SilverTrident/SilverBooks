import React from 'react';
import {Link} from 'react-router-dom'

import Header from '../../components/Header';
import Footer from '../../components/Footer'

import imgNotFound from '../../assets/images/notFoundPage.png';
 
import './styles.css';
function NotFoundPage(){
    return(
        <div className='page-containner'>
            <Header link='/'/>
            <section id='notfound-informations-area'>
                <img id='notfound-img-information' src={imgNotFound} alt='not-found'/>
                <Link to='/'>Voltar para Home Page.</Link>
            </section>
            <Footer/>
        </div>
    )
}

export default NotFoundPage