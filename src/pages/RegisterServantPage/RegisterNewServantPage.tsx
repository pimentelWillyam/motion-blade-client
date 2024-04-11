import './RegisterNewServantPage.css'


import Container from 'react-bootstrap/Container'
import RegisterNewServantForm from '../../components/Forms/RegisterNewServantForm/RegisterNewServantForm';

const RegisterNewServantPage = () => {
  return (
    <Container id = 'register-user-page'>
      <RegisterNewServantForm />
    </Container>

        
      
  )
}

export { RegisterNewServantPage }