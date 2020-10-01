import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import api from '../../services/api';


import Input from '../../components/Input';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ButtonLogout from '../../components/ButtonLogout';

import './styles.css'
function Register(props) {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [err, setErr] = useState();
    const [loading, setLoading] = useState('');

    async function cadUser(e) {
        e.preventDefault();
        setErr('')
        setLoading('Salvando dados...');
        if (!name) {
            setLoading('')
            setErr('Nome é necessário ser preenchido')
        }
        else if (!email) {
            setLoading('')
            setErr('Campo email é necessário ser preenchido')
        }
        else if (!password) {
            setLoading('')
            setErr('Campo senha é necessário ser preenchido')
        } else if (password !== passwordConfirm) {
            setLoading('')
            setErr('Senhas não identicas')
            
        }
        else if (name && email && password && password === passwordConfirm) {
            await api.post('/user/', {
                name,
                email,
                password
            }).then(response => {
                setLoading('')
                alert('Usuário cadastrado com sucesso!')
                props.history.push('/user/home');
            }).catch(err => {
                setLoading('')
                alert('email já cadastrado no sistema!')
            })
        }

    }
    return (
        <div id='register-page'>
            <Header link='/user/home'>
                <ButtonLogout />
            </Header>

            <div className='login-error'>
                <span className='error-login-msg'>{err}</span>
                <span className='sucess-login-msg'>{loading}</span>
            </div>
            <div id='register-containner'>
               
                <form onSubmit={cadUser} id='registe-user-form'>
                    <h1>Cadastrar Usuário</h1>
                    <div id='register-field'>
                        <Input type='text' placeholder='Digite um nome' action={e => setName(e.target.value)} />
                        <Input type='email' placeholder='exemple@email.com' action={e => setEmail(e.target.value)} />
                        <Input type='password' placeholder='Digite uma senha' action={e => setPassword(e.target.value)} />
                        <Input type='password' placeholder='Confirme sua senha' action={e => setPasswordConfirm(e.target.value)} />
                    </div>
                    <div id='register-buttons'>
                       <Link to='/user/home'><input type='button' id='btn-back' value='Voltar' /></Link> 
                        <input type='submit' id='btn-register' value='Cadastrar' />
                    </div>
                </form>
            </div>
            <div id='register-user-footer'>
                <Footer />
            </div>
        </div>

    )
}

export default Register;