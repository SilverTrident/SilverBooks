import React, { useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import api from '../../services/api';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './styles.css'


function Login(props) {
    
        const [email, setEmail] = useState();
        const [password, setPassword] = useState();
        
        
    
    
        async function Login(){
        await api.post('/user/login',{email : email, password:password})
        .then(response =>{
            const {token} = response.data
            if(token){
                props.history.push('/user/home');

                localStorage.setItem('app-token',token);    
                
            }
        }).catch(err => {
            localStorage.removeItem('app-token')
            console.log(err) 
        })
    }



    return (
        
        <div id="login-page">
           
            <Header />
            <div id='login-containner'>

                <form id='form-login'>
                    <h1>Login</h1>
                    <div id='login-field'>
                        <div id='input'>
                            <input 
                            type='email' 
                            placeholder='exemple@email.com'
                            onChange={email=>setEmail(email.target.value)}/>
                           
                            <input type='password' placeholder='**************' 
                            onChange= {password =>setPassword(password.target.value)}/>
                            
                        </div>


                    </div>
                    <div id='login-buttons'>
                        <Link to='/'><input type='button' id='btn-back' value='Voltar' /></Link>
                        <input type='button' id='btn-logar' onClick={Login}value='Entrar' />
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