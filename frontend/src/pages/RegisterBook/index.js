import React ,{useState}from 'react';
import api from '../../services/api';

import TextArea from '../../components/TextArea'
import Select from '../../components/Select'
import Input from '../../components/Input'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

import './styles.css'

//implementar select


function RegisterBook() {

    const [name, setName] = useState();
    const [categories, setCategories] = useState();
    const [description, setDescription] = useState();
    const [bookLink, setBookLink] = useState();
    const [imgLink, setImgLink] = useState();


  
       
              async function Cad(){
            await api.post(`/admin/`,{
                name,
                categories,
                description,
                bookLink,
                imgLink,
            }).then(()=>{
                setName('');
                setCategories('');
                setDescription('');
                setBookLink('');
                setImgLink('');

                alert('Livro criado');
            }).catch(err => {
                alert(`alert ${err}`)
                console.log(err)
            })
        }           
       
     

    return (
        <div id='registerBook-page'>
            <Header />


            <div id=''>

                <form>
                    <h1>Cadastrar Livro</h1>
                    <div id='registerBook-field'>
                        <Input type='text' placeholder='Nome do livro' action={e =>setName(e.target.value)}/>
                        <Input type='text' placeholder='Link do livro' action={e =>setBookLink(e.target.value)}/>
                        <Input type='text' placeholder='Link da Imagem' action={e =>setImgLink(e.target.value)}/>
                        <Select value={categories} action={e =>setCategories(e.target.value)}> 
                           
                           
                        </Select>

                    </div>
                    <div id='registerBook-area'>


                    <TextArea valo ={description} label='Descrição completa do livro:' action={e =>setDescription(e.target.value)} />
                        
                    </div>
                    <div id='registerBook-buttons'>
                        <input type='button' id='btn-registerBook' value='Cadastrar Livro' onClick={Cad} />
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