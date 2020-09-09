import React from 'react'

import Input from '../../components/Input'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './styles.css'
function Login(){
    return(
        <div id="login-page">
            <Header/>
            <div id='login-containner'>
                
                <form>
                <h1>Login</h1>
                    <div id='login-field'>
                        <Input type='email'  placeholder='exemple@email.com'/>
                        <Input type='password'  placeholder='**************'/>
                    </div>
                    <div id='login-buttons'>
                        <input type='button' id='btn-back' value='Voltar'/>
                        <input type='submit' id='btn-logar' value='Entrar'/>
                    </div>
                    
                </form>
            </div>
            <div id='login-footer'>
                <Footer/>
            </div>
            
        </div>
       
    );
}

export default Login;