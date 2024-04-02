import './style.css'

import { useState,useEffect } from 'react'

import {Link} from 'react-router-dom'

import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Button from 'react-bootstrap/Button';

import { UsuarioService } from '../../../api/services/UsuarioService';

import {handleRemocaoUsuario as handleRemocaoUsuario} from "../../../handlers/handleRemocaoUsuario"
import { Usuario } from '../../../api/models/User';



export default function TabelaUsuarios (){
    const [listaUsuarios,setListaUsuarios] = useState([])

    const atualizaListaUsuarios = async () => {
        const data = await UsuarioService.pegaTodosUsuarios()
        setListaUsuarios(data)
    }

    useEffect( () =>{
        atualizaListaUsuarios()
        
    },[])

    return (
        <Container id="container-tabela-usuarios">
            <Row id="container-tabela-usuarios-linha-1">
                <Table id='tabela-usuarios' striped bordered hover size="lg">
                    <thead>
                        <tr>
                            <th>Login</th>
                            <th>E-mail</th>
                            <th>Tipo</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    { listaUsuarios.map((usuario: Usuario) =>{
                        return(
                            <tr key={usuario.email}>
                                <th>{usuario.login}</th>
                                <th>{usuario.email}</th>
                                <th>{usuario.type}</th>
                                <th id="tabela-usuarios-coluna-botoes"><Button onClick={() => handleRemocaoUsuario(usuario,atualizaListaUsuarios)} variant="danger">Remover</Button> <Link to ={`/edita-usuario/${usuario.id}`}> <Button variant = "warning"> Editar</Button> </Link> </th> 
                            </tr>
                        )
                        })}         
                </tbody>
                </Table>  
            </Row>
            <Row id= "container-tabela-usuarios-linha-2">
                <Button id="botao-atualizar-tabela-usuarios" onClick={() =>{atualizaListaUsuarios()}} variant = "success">Atualizar</Button>
            </Row>
        </Container>
    )
}