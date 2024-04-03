import './LoginPage.css'


import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import RegisterNewUserButton from '../../components/Buttons/RegisterNewUserButton';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const LoginPage = () => {
  return (
    <Container>
      <LoginForm />
      <RegisterNewUserButton />
    </Container>
        
      
  )
}

export default LoginPage