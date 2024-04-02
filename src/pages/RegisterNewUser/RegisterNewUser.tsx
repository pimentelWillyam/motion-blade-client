// meus imports
import './style.css'
import NavigationBar from '../../components/Navbars/NavigationBar'
// imports do react-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

import { useEffect } from 'react';

import { useRecoilValue } from 'recoil';
import { sessaoAtomo} from '../../atomos/sessaoAtomo'
import { useNavigate } from 'react-router-dom';

import { }

export function RegisterNewUser (){
    const sessao = useRecoilValue(sessaoAtomo)
    let redireciona = useNavigate()
    useEffect( () =>{
        if (sessao.tipo == undefined){
            // return redireciona('/')
        }
    },[]) 
    return (  
        <Container id="pagina-home">
            <title>Register New User</title>

            
        </Container>
        
    )
}
