import React, { useState} from 'react'
import {Redirect} from 'react-router-dom'
import api from '../../services/api';

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './styles.css'
function Login() {
    
        const [email, setEmail] = useState();
        const [password, setPassword] = useState();
        const [redirect, setRedirect] = useState(false)
        
    
    
        async function Login(){
        await api.post('/user/login',{email : email, password:password})
        .then(response =>{
            const {token} = response.data
            if(token){
                setRedirect(true);
                localStorage.setItem('app-token',token);    
                
            }
        }).catch(err => {
            localStorage.removeItem('app-token')
            console.log(err) 
        })
    }



    return (
        
        <div id="login-page">
            {redirect && <Redirect to='/user'/>}
            <Header />
            <div id='login-containner'>

                <form>
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
                        <input type='button' id='btn-back' value='Voltar' />
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