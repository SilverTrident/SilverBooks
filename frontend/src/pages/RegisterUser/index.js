import React from 'react'

import Input from '../../components/Input'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'
function Register() {
    return (
        <div id='register-page'>
            <Header />


            <div id='register-containner'>

                <form>
                    <h1>Cadastrar Usuário</h1>
                    <div id='register-field'>
                        <Input type='text'  placeholder='Digite seu nome' />
                        <Input type='email'  placeholder='exemple@email.com' />
                        <Input type='password'  placeholder= 'Digite uma senha' />
                        <Input type='password'  placeholder='Confirme sua senha' />
                    </div>
                    <div id='register-buttons'>
                        <input type='button' id='btn-back' value='Voltar' />
                        <input type='submit' id='btn-register' value='Cadastrar' />
                    </div>
                </form>
            </div>
            <div id='login-footer'>
                <Footer/>
            </div>
        </div>

    )
}

export default Register;