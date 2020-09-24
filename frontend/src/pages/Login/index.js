import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import api from '../../services/api';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import logoICon from '../../assets/images/IconLogo.png'

import './styles.css'


function Login(props) {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState('');
  





    async function Login(e) {
        e.preventDefault()
        const rejex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi
        if (rejex.test(email)) {
            await api.post('/user/login', { email: email, password: password })
                .then(response => {
                    props.history.push('/user/home');
                    const { token } = response.data
                    if (token) {
                        

                        localStorage.setItem('app-token', token);
                    }
                }).catch(err => {
                    localStorage.removeItem('app-token')
                    setError('Email ou senha incorretos. Por favor tente novamente!')
                })
        } else {
            setError('Formato de E-mail invalido')
            
        }

    }



    return (

        <div id="login-page">

            <Header />
            <div id='login-error'>
               <span>{error}</span> 
            </div>
            <div id='login-containner'>

                <form onSubmit={Login} id='form-login'>
                    <img id='img-logo-icon' src={logoICon} alt='img-logo-icon' />
                    <h1>Login</h1>

                    <div id='login-field'>
                        <div id='input'>
                            <input
                                type='email'
                                placeholder='exemple@email.com'
                                onChange={email => setEmail(email.target.value)} />

                            <input type='password' placeholder='**************'
                                onChange={password => setPassword(password.target.value)} />

                        </div>


                    </div>
                    <div id='login-buttons'>
                        <Link to='/'><input type='button' id='btn-back' value='Voltar' /></Link>
                        <button id='btn-logar'  type='submit'>Entar</button>
                        
                    </div>

                </form>
            </div>
            <div id='login-footer'>
                <Footer />
            </div>

        </div>

    );
}

export default Login;