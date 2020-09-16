import React ,{useState,useEffect}from 'react';
import {Redirect} from 'react-router-dom';
import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Input from '../../components/Input'
import Select from '../../components/Select'
import TextArea from '../../components/TextArea'
import './styles.css';

/*Slect e alter css*/


function EditBook({match}) {

    
    const [name, setName] = useState();
    const [categories, setCategories] = useState();
    const [description, setDescription] = useState();
    const [bookLink, setBookLink] = useState();
    const [imgLink, setImgLink] = useState();
    const [redirect, setRedirect] = useState(false);


   
   
    async function LoadBookData(){
        await api.get(`/admin/edit/${match.params.id}`).
        then(response =>{
            console.log(response) 
            
            setName(response.data.name);
            setCategories(response.data.categories);
            setDescription(response.data.description);
            setBookLink(response.data.bookLink);
            setImgLink(response.data.imgLink);
        }).catch(err => {
            
            console.log(err) 
        })
    }



        useEffect(() => {
            LoadBookData();
        }, []);


        async function Save(){
            await api.put(`/admin/${match.params.id}`,{
                name,
                categories,
                description,
                bookLink,
                imgLink,
            }).then(()=>{
               setRedirect(true);
            })
        }
   
    return (

        
        <div id='page-editbook'>
            {redirect && <Redirect to="/user"/>}
            <Header />
            <main>
                <form id='card-form'>
                    <h1>Editar Livro</h1>
                    <div id='top-side'>
                        <div id='contanner-img'>
                            <img id='book-img' src={imgLink} />
                        </div>

                        <div id='fields-containner'>
                
                            <Input type='text' valo ={imgLink} action={e =>setImgLink(e.target.value)} />                        
                            <Input type='text' valo ={name}  action={e =>setName(e.target.value)}/>
                            <Input type='text'valo ={bookLink} action={e =>setBookLink(e.target.value)} />
                            <Select>
                                <option value='0'>Fantasia</option>
                                <option value='1'>Horror</option>
                                <option value='2'>Romance</option>
                            </Select>
                        </div>
                    </div>

                    <div id='bot-side'>
                        <TextArea valo ={description} label='Descrição completa do livro:' action={e =>setDescription(e.target.value)} />
                    </div>
                    <div id='editBook-buttons'>
                        <input type='button' id='btn-editBook' value='Editar Livro' onClick={Save}/>
                    </div>
                </form>
            </main>
            <Footer/>
        </div>
    );
}

export default EditBook;