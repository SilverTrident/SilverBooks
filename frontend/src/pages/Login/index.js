import React from 'react'
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
                        <input type='email' id='field-email' placeholder='exemple@email.com'/>
                        <input type='password' id='field-password' placeholder='**************'/>
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