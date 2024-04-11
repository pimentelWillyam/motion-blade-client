import './RegisterNewUserPage.css'


import RegisterNewUserForm from '../../components/Forms/RegisterNewUserForm/RegisterNewUserForm';
import Container from 'react-bootstrap/Container'

const RegisterNewUserPage = () => {
  return (
    <Container id = 'register-user-page'>
      <RegisterNewUserForm />
    </Container>

        
      
  )
}

export { RegisterNewUserPage }