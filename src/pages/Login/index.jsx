// meus imports
import './style.css'
import FormLogin from '../../components/Forms/FormLogin'
// imports do react-bootstrap
import Container from 'react-bootstrap/Container';

export function Login (){
    return (
        <Container id="pagina-login">
            <title>Login</title>
            <FormLogin/>
        </Container>
        
        
    )
}
