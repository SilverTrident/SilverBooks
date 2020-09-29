import React, { useState } from 'react';
import api from '../../services/api';

import TextArea from '../../components/TextArea'
import Select from '../../components/Select'
import Input from '../../components/Input'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ButtonLogout from '../../components/ButtonLogout';


import './styles.css'




function RegisterBook(props) {

    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [categories, setCategories] = useState();
    const [description, setDescription] = useState();
    const [subDescription, setSubDescription] = useState();
    const [bookLink, setBookLink] = useState();
    const [imgLink, setImgLink] = useState();


    const [titleAlert, setTitleAlert] = useState();
    const [authorAlert, setAuthorAlert] = useState();
    const [categoriesAlert, setCategoriesAlert] = useState();
    const [descriptionAlert, setDescriptionAlert] = useState();
    const [subDescriptionAlert, setSubDescriptionAlert] = useState();
    const [bookLinkAlert, setBookLinkAlert] = useState();
    const [imgLinkAlert, setImgLinkAlert] = useState();




    async function Cad() {
        if(!title){
            setTitleAlert("Titulo é obrigatorio")
        } if(!author){
            setAuthorAlert("Autor é obrigatorio")
        } if(!categories){
            setCategoriesAlert("Genêro é obrigatorio")
        } if(!subDescription){
            setSubDescriptionAlert("Descrição basica é obrigatoria")
        } if(!description){
            setDescriptionAlert("Descrição completa é obrigatoria")
        } if(!bookLink){
            setBookLinkAlert("link do livro é obrigatorio")
        } if(!imgLink){
            setImgLinkAlert("link da capa é obrigatorio")
        }
        
        if(title && 
            author && 
            categories && 
            description && 
            subDescription && 
            bookLink && 
            imgLink){
            await api.post(`/admin/`, {
                title,
                author,
                categories,
                subDescription,
                description,
                bookLink,
                imgLink,
            }).then(() => {
                alert('Livro Cadastrado com Sucesso!')
                props.history.push('/user/home');
    
                
            }).catch(err => {
                alert(`Todos os campos são obrigatorios`)
                console.log(err)
            })
        }
        
    }



    return (
        <div id='registerBook-page'>
            <Header link='/user/home'>
                <ButtonLogout />
            </Header>


            <div id='registerBook-containner'>

                <form id='cadaster-book-form'>
                    <h1>Cadastrar Livro</h1>
                    <div id='registerBook-field'>
                        <Input type='text' placeholder='Nome do livro' action={e => setTitle(e.target.value)} />
                        <span className = 'alert'>{titleAlert}</span>
                        <Input type='text' placeholder='Nome do Autor do livro' action={e => setAuthor(e.target.value)} />
                        <span className = 'alert'>{authorAlert}</span>
                        <Input type='text' placeholder='Link do livro' action={e => setBookLink(e.target.value)} />
                        <span className = 'alert'>{bookLinkAlert}</span>
                        <Input type='text' placeholder='Link da Imagem' action={e => setImgLink(e.target.value)} />
                        <span className = 'alert'>{imgLinkAlert}</span>
                        <Select value={categories} action={e => setCategories(e.target.value)}/>
                        <span className = 'alert'>{categoriesAlert}</span>

                        

                    </div>
                    <div id='registerBook-area'>


                        <TextArea valo={subDescription} label='Descrição Basica do livro:' action={e => setSubDescription(e.target.value)} />
                        <span className = 'alert'>{subDescriptionAlert}</span>
                        <TextArea valo={description} label='Descrição completa do livro:' action={e => setDescription(e.target.value)} />
                        <span className = 'alert'>{descriptionAlert}</span>
                    </div>
                    <div id='registerBook-buttons'>
                        <input type='button' id='btn-registerBook' value='Cadastrar Livro' onClick={Cad} />
                    </div>
                </form>
            </div>
            <div id='login-footer-cad'>
                <Footer />
            </div>
        </div>

    )
}

export default RegisterBook;