import './style.css'

import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {handleSubmissaoFormsCadastroUsuario as handleSubmissaoFormsCadastroUsuario } from '../../../handlers/handleSubmissaoFormsCadastroUsuario'

import {sessaoAtomo} from '../../../atomos/sessaoAtomo'
import {useRecoilValue} from 'recoil'



export default function FormCadastroUsuario (){

    const [login,setLogin] = useState('')
    const [senha,setSenha] = useState('')
    const [senhaRepetida,setSenhaRepetida] = useState('')
    const [email,setEmail] = useState('')
    const [tipo,setRank] = useState('')
    const sessao = useRecoilValue(sessaoAtomo)

    const atualizaLogin = (event: any) =>{
        setLogin(event.target.value)
    }

    const atualizaSenha = (event: any) =>{
        setSenha(event.target.value)
    }

    const atualizaSenhaRepetida = (event: any) =>{
        setSenhaRepetida(event.target.value)
    }

    const atualizaEmail = (event: any) =>{
        setEmail(event.target.value)
    }

    const atualizaRank = (event: any) =>{
        setRank(event.target.value)
    }

    if (sessao.tipo === 'Administrador Master'){
        return (
            <Form id="form-cadastro-usuario" onSubmit={event =>{handleSubmissaoFormsCadastroUsuario(event,login,setLogin,senha,setSenha,senhaRepetida,setSenhaRepetida,email,setEmail,tipo,setRank)}}>
                <Form.Group className="mb-3" controlId="form-login">
                    <Form.Control type="text" placeholder="Insira o seu login" value = {login} onChange = {(event) => atualizaLogin(event)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="form-senha">
                    <Form.Control type="password" placeholder="Insira a sua senha" value = {senha} onChange = {(event) => atualizaSenha(event)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form-senha-repetida">
                    <Form.Control type="password" placeholder="Insira a sua senha novamente" value = {senhaRepetida} onChange = {(event) => atualizaSenhaRepetida(event)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form-email">
                    <Form.Control type="email" placeholder="Insira o seu e-mail" value = {email} onChange = {(event) => atualizaEmail(event)} />
                </Form.Group>
                <Form.Select value = {tipo} onChange = {atualizaRank}>
                    <option>Selecione o seu tipo de usuário</option>
                    <option>Usuário</option>
                    <option>Administrador Master</option>
                    <option>Administrador de Controle Interno</option>
                    <option>Administrador de Gestão de Pessoas</option>
                </Form.Select>
                <br />
                <Button id="botao-voltar" variant="danger" href="/home">
                    Voltar
                </Button>
                <Button id="botao-cadastrar" variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
            
        )
    }
    
}