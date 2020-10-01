import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Input from '../../components/Input'
import Select from '../../components/Select'
import TextArea from '../../components/TextArea'
import ButtonLogout from '../../components/ButtonLogout';
import './styles.css';

function EditBook( { match }) {

    const [title, setTitle] = useState();
    const [categories, setCategories] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();
    const [subDescription, setSubDescription] = useState();
    const [bookLink, setBookLink] = useState();
    const [imgLink, setImgLink] = useState();
    const [redirect, setRedirect] = useState(false);

    
    useEffect(() => {
        const LoadBookData = async () => {
            await api.get(`/admin/edit/${match.params.id}`)
            .then(response => {
                    setTitle(response.data.title);
                    setCategories(response.data.categories);
                    setAuthor(response.data.author)
                    setDescription(response.data.description);
                    setBookLink(response.data.bookLink);
                    setImgLink(response.data.imgLink);
                    setSubDescription(response.data.subDescription)
                }).catch(err => {
                    console.log(err)
                })
        }
        LoadBookData();
    }, [match]);

    async function Save() {
        await api.put(`/admin/${match.params.id}`, {
            title,
            categories,
            author,
            description,
            subDescription,
            bookLink,
            imgLink,
        }).then(() => {
            setRedirect(true);
        })
    }

    async function Delete() {
        const res = window.confirm('Deletar Livro?');

        if (res) {
            await api.delete(`/admin/${match.params.id}`).then(() => {
                alert('removido');
                setRedirect(true);
            })
        } else {
            alert('cancelado')
        }
    }

    return (

        <div id='page-editbook'>
            {redirect && <Redirect to="/user/home" />}
            <Header link='/user/home'>
                <ButtonLogout />
            </Header>
            <main>
                <form id='edit-book-form'>
                    <h1>Editar Livro</h1>
                    <div id='top-side'>
                        <div id='contanner-img'>
                            <img id='book-img' src={imgLink} alt ='book-folder'/>
                        </div>

                        <div id='fields-containner'>
                            <span>Título:</span>
                            <Input type='text' valo={title} action={e => setTitle(e.target.value)} />
                            <span>Autor:</span>
                            <Input type='text' valo ={author}  action={e =>setAuthor(e.target.value)}/>
                            <span>Link da imagem:</span>
                            <Input type='text' valo={imgLink} action={e => setImgLink(e.target.value)} />
                            <span>Link do Livro</span>
                            <Input type='text' valo={bookLink} action={e => setBookLink(e.target.value)} />
                            <Select value={categories} action={e => setCategories(e.target.value)} />

                        </div>
                    </div>

                    <div id='bot-side'>
                        <TextArea valo={subDescription} label='Descrição minima do livro:' action={e => setSubDescription(e.target.value)} />
                        <TextArea valo={description} label='Descrição completa do livro:' action={e => setDescription(e.target.value)} />
                    </div>
                    <div id='editBook-buttons'>
                        <input type='button' id='btn-editBook' value='Editar Livro' onClick={Save} />
                        <input type='button' id='btn-editBook' value='Deletar Livro' onClick={Delete} />
                    </div>
                </form>
            </main>
            <Footer />
        </div>
    );
}

export default EditBook;