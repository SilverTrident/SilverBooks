import React from 'react'

import Input from '../../components/Input'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'
function RegisterBook() {
    return (
        <div id='registerBook-page'>
            <Header />


            <div id='registerBook-containner'>

                <form>
                    <h1>Cadastrar Usuário</h1>
                    <div id='registerBook-field'>
                        <Input type='text'  placeholder='Digite  nome do livro' />
                        <Input type='email' placeholder='exemple@email.com' />
                        
                    </div>
                    <div id='registerBook-buttons'>
                        <input type='submit' id='btn-registerBook' value='Cadastrar Livro' />
                    </div>
                </form>
            </div>
            <div id='login-footer'>
                <Footer/>
            </div>
        </div>

    )
}

export default RegisterBook;