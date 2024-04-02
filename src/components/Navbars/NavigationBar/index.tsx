import './style.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {handleSignOut} from '../../../handlers/handleSignOut'
import { useRecoilState } from 'recoil';
import {sessaoAtomo} from '../../../atomos/sessaoAtomo'
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'


export default function NavigationBar (){
    const [sessao,setSessao] = useRecoilState(sessaoAtomo)
    const navegar = useNavigate()
    console.log(sessao)
    if (sessao.tipo === "Usuário"){
        return (
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as = {Link} to="/home">Home</Navbar.Brand>
                        <Nav className="me-auto">
                        <NavDropdown title="Controle Interno" id="collasible-nav-dropdown">
                            <NavDropdown.Item as = {Link} to="/mapeamento-processos" >Mapeamento de Processos</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/programa-integridade" >Programa de Integridade</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/modelo-excelencia-gestao" >Modelo de Excelência de Gestão</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/legislacao-controle-interno" >Legislação</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/indice-adequacao-controle-interno" >Índice de Adequação do Controle Interno</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/comissoes-instituidas-sds" >Comissões Instituídas na SDS</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/relatorio-sds-controle-interno" >Relatórios SDS</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Gestão de Pessoas" id="collasible-nav-dropdown">
                            <NavDropdown.Item as = {Link} to="/boletins-geral" >Boletim Geral</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/boletins-interno" >Boletim Interno</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/legislacao-gestao-pessoas" >Legislação</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/relatorio-sds-gestao-pessoas" >Relatórios SDS</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button variant="danger" onClick = {() =>{ handleSignOut(navegar,setSessao)}}>
                        Sair
                    </Button>
                </Container>
            </Navbar>  
        )
    }
    else if (sessao.tipo === "Administrador Master"){
        return (
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as = {Link} to="/home">Home</Navbar.Brand>
                        <Nav className="me-auto">
                        <NavDropdown title="Controle Interno" id="collasible-nav-dropdown">
                            <NavDropdown.Item as = {Link} to="/mapeamento-processos" >Mapeamento de Processos</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/programa-integridade" >Programa de Integridade</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/modelo-excelencia-gestao" >Modelo de Excelência de Gestão</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/legislacao-controle-interno" >Legislação</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/indice-adequacao-controle-interno" >Índice de Adequação do Controle Interno</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/comissoes-instituidas-sds" >Comissões Instituídas na SDS</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/relatorio-sds-controle-interno" >Relatórios SDS</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Gestão de Pessoas" id="collasible-nav-dropdown">
                            <NavDropdown.Item as = {Link} to="/boletins-geral" >Boletim Geral</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/boletins-interno" >Boletim Interno</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/legislacao-gestao-pessoas" >Legislação</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/relatorio-sds-gestao-pessoas" >Relatórios SDS</NavDropdown.Item>
                        </NavDropdown> 
                        <Nav.Link as ={Link} to="/cadastro-arquivo">Cadastrar Arquivo</Nav.Link>
                        <Nav.Link as ={Link} to="/cadastro-usuario">Cadastrar Usuário</Nav.Link>
                        <Nav.Link as ={Link} to="/usuarios">Usuários</Nav.Link>
                    </Nav>
                    <Button variant="danger" onClick = {() =>{ handleSignOut(navegar,setSessao)}}>
                        Sair
                    </Button>
                </Container>
            </Navbar>
        )  
    }
    else if (sessao.tipo === "Administrador de Controle Interno" || sessao.tipo === "Administrador de Gestão de Pessoas"){
        return (
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as = {Link} to="/home">Home</Navbar.Brand>
                        <Nav className="me-auto">
                        <NavDropdown title="Controle Interno" id="collasible-nav-dropdown">
                            <NavDropdown.Item as = {Link} to="/mapeamento-processos" >Mapeamento de Processos</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/programa-integridade" >Programa de Integridade</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/modelo-excelencia-gestao" >Modelo de Excelência de Gestão</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/legislacao-controle-interno" >Legislação</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/indice-adequacao-controle-interno" >Índice de Adequação do Controle Interno</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/comissoes-instituidas-sds" >Comissões Instituídas na SDS</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/relatorio-sds-controle-interno" >Relatórios SDS</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Gestão de Pessoas" id="collasible-nav-dropdown">
                            <NavDropdown.Item as = {Link} to="/boletins-geral" >Boletim Geral</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/boletins-interno" >Boletim Interno</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/legislacao-gestao-pessoas" >Legislação</NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/relatorio-sds-gestao-pessoas" >Relatórios SDS</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as ={Link} to="/cadastro-arquivo">Cadastrar Arquivo</Nav.Link>
                    </Nav>
                    <Button variant="danger" onClick = {() =>{ handleSignOut(navegar,setSessao)}}>
                        Sair
                    </Button>
                </Container>
            </Navbar> 
        )  
    }
    else{
        return
    }
}