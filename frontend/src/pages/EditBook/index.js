import React from 'react';

import Header from '../../components/Header';
import Input from '../../components/Input'
import Select from '../../components/Select'
import TextArea from '../../components/TextArea'
import './styles.css';

function EditBook() {
    return (
        <div id='page-editbook'>
            <Header />
            <form id='card-form'>
                <main>
                    <h1>Editar Livro</h1>
                    <div id='top-side'>
                        <div id='contanner-img'>
                            <img id='book-img' src="http://imagens.lelivros.love/2020/06/baixar-livro-a-cantiga-dos-passaros-e-das-serpentes-jogos-vorazes-vol-04-suzanne-collins-em-pdf-epub-mobi-ou-ler-online-370x546.jpg" />
                        </div>

                        <div id='fields-containner'>
                            <Input type='text' placeholder='Link da imagem' />
                            <Input type='text' placeholder='Nome do Livro' />
                            <Input type='text' placeholder='Link do Livro' />
                            <Select>
                                <option value='0'>Fantasia</option>
                                <option value='1'>Horror</option>
                                <option value='2'>Romance</option>
                            </Select>
                        </div>
                    </div>

                    <div id='bot-side'>
                        <TextArea label='Descrição Básica do livro:' rows='5' />
                        <TextArea label='Descrição completa do livro:' rows='10' />
                    </div>
                </main>
            </form>
        </div>
    );
}

export default EditBook;