import React from 'react'

import Select from '../../components/Select'
import Input from '../../components/Input'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

//implementar select
function RegisterBook() {
    return (
        <div id='registerBook-page'>
            <Header />


            <div id='registerBook-containner'>

                <form>
                    <h1>Cadastrar Livro</h1>
                    <div id='registerBook-field'>
                        <Input type='text' placeholder='Nome do livro' />
                        <Input type='text' placeholder='Link do livro' />
                        <Input type='text' placeholder='Link da Imagem' />
                        <Select> 
                            <option value='0'>Fantasia</option>
                            <option value='1'>Horror</option>
                            <option value='2'>Romance</option>
                        </Select>

                    </div>
                    <div id='registerBook-area'>
                        <label>Descrição Básica do livro:</label>
                        <textarea cols='15'></textarea>

                        <label>Descrição completa do livro:</label>
                        <textarea cols='30'></textarea>
                    </div>
                    <div id='registerBook-buttons'>
                        <input type='button' id='btn-registerBook' value='Cadastrar Livro' />
                    </div>
                </form>
            </div>
            <div id='login-footer'>
                <Footer />
            </div>
        </div>

    )
}

export default RegisterBook;