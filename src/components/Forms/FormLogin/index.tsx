import './style.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react'
import { handleSubmissaoFormsLogin } from '../../../handlers/handleSubmissaoFormsLogin';
import { useEffect } from 'react';
import { sessaoAtomo } from '../../../atomos/sessaoAtomo';
import {useRecoilState} from 'recoil'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';


export default function FormLogin (){

    const [login,setLogin] = useState('')
    const [senha,setSenha] = useState('')
    const [sessao,setSessao] = useRecoilState(sessaoAtomo)
    const navegar = useNavigate()

    const atualizaLogin = (event: any) =>{
        setLogin(event.target.value)
    }
    const atualizaSenha = (event: any) =>{
        setSenha(event.target.value)
    }

    // useEffect apenas para fins de depuração
    useEffect( () =>{
    },[sessao])

    return (
        <div id="form-login" onSubmit={event =>{handleSubmissaoFormsLogin(event,login,setLogin,senha,setSenha,setSessao,navegar)}}>
            <Form id = "form-login">
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="text" placeholder="Insira o seu login" onChange={atualizaLogin} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control type="password" placeholder="Insira o sua senha" onChange ={atualizaSenha} />
                <br />
                <Button id="form-login-botao-entrar" variant="primary" type= "submit">
                    Login
                </Button>
                <Button id="form-login-botao-cadastrar" variant="success" as = {Link} to="/register-new-user">
                    Cadastrar-se
                </Button>
                <br />
            </Form.Group>
        </Form>
        </div>
    )
}